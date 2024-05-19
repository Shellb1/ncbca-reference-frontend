import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TeamSummaryService } from '../services/team-summary.service';
import { TeamSummary } from '../model/TeamSummary';
import { Game } from '../model/Game';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PostseasonGame } from '../model/PostseasonGame';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterModule],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.scss'
})
export class TeamSummaryComponent implements OnInit {

  teamSummary: TeamSummary | undefined;
  postseasonGames: PostseasonGame[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      const teamName = params['teamName']
      if (year && teamName) {
        this.loadTeamSummary(teamName, year);
        this.loadPostseasonGamesForYearAndTeam(year, teamName);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadTeamSummary(teamName: string, year: Number): void {
    this.teamSummaryService.getTeamSummary(teamName, year)
      .subscribe((teamSummary: TeamSummary) => {
        this.teamSummary = teamSummary;
      });
  }

  loadPostseasonGamesForYearAndTeam(year: Number, teamName: String): void {
    this.teamSummaryService.getPostseasonGames(year, teamName)
      .subscribe((games: PostseasonGame[]) => {
        this.postseasonGames = games;
      })
  }

  determineOpponent(game: Game) {
    let teamName = this.teamSummary?.teamName;
    if (game.awayTeamName == teamName) {
      return game.homeTeamName;
    } else {
      return game.awayTeamName;
    }
  }

  determineResult(game: Game) {
    let teamName = this.teamSummary?.teamName;
    let result;
    if (game.winningTeamName == teamName) {
      result = 'W, ' + game.winningTeamScore + '-' + game.losingTeamScore;
    } else {
      result = 'L, ' + game.losingTeamScore + '-' + game.winningTeamScore;
    }
    return result;

  }

  determineLocation(game: Game) {
    let teamName = this.teamSummary?.teamName;
    if (!game.neutralSite) {
        if (game.homeTeamName == teamName) {
          return 'Home';
        } else {
          return 'Away';
        }
    } else {
      return 'Neutral'
    }

  }

  determineRecordAtGame(game: Game, games: Game[] | undefined) {
    if (!games || games.length === 0) {
      return '0-0';
    }
  
    let wins = 0;
    let losses = 0;
  
    for (const g of games) {
      if (g.gameId > game.gameId) {
        break; // Stop iterating once we reach the given game
      }

      let teamIdToSearchFor = this.teamSummary?.teamId;

      if (g.winningTeamId === teamIdToSearchFor) {
          wins++;
        } else {
          losses++;
        }
    }
  
    return wins + '-' + losses;

  }

  determineConferenceRecordAtGame(game: Game, games: Game[] | undefined) {
    let wins = 0;
    let losses = 0;
    if (!games || games?.length < 1) {
      return '0-0';
    } else if (this.gameIsOutOfConferencePlay(game, games)) {
      return '';
    }
    
    else {
      for (let i = 12; i < games.length; i++) {
        let gameToLookAt = games[i];
        let teamIdToSearchFor = this.teamSummary?.teamId;
          if (gameToLookAt.winningTeamId === teamIdToSearchFor) {
              wins++;
            } else {
              losses++;
            }
          if (gameToLookAt.gameId == game.gameId) {
            break;
          }
        }

    }
    return wins + '-' + losses;
  }

  navigateToTeamSummary(year: Number | undefined, teamName: String | undefined) {
    this.router.navigate(['/teamSummary'], { queryParams: { year: year, teamName: teamName} });
  }

  gameIsOutOfConferencePlay(game: Game, games: Game[]) {
    let gamesCount = 0;
    for (let i = 0; i < games.length; i++) {
      if (games[i].gameId != game.gameId) {
        gamesCount++;
      } else {
        break;
      }
    }
    if (gamesCount < 12 || gamesCount > 33) {
      return true;
    } else {
      return false;
    }
  }

  determineResultForStyling(game: Game) {
    if (game.winningTeamId == this.teamSummary?.teamId) {
      return 'Win';
    } else {
      return 'Loss'
    }
  }

  showNITRow(index: number | undefined): boolean {
    if (!index || !this.postseasonGames || this.postseasonGames.length === 0) {
      return false;
    }
  
    let nextGame = this.teamSummary?.games[index];
    if (!nextGame) {
      return false;
    }
  
    // Find the corresponding postseason game
    let firstPostseasonGame = this.postseasonGames[0];
    
    if (nextGame.gameId == firstPostseasonGame.gameId && firstPostseasonGame.gameType === 'NIT') {
      return true;
    }
    return false;
  }
  
  showFirstSixteenRow(index: number | undefined): boolean {
    if (!index || !this.postseasonGames || this.postseasonGames.length === 0) {
      return false;
    }
  
    let nextGame = this.teamSummary?.games[index];
    if (!nextGame) {
      return false;
    }
  
    // Find the corresponding postseason game
    let firstPostseasonGame = this.postseasonGames[0];

    if (nextGame.gameId == firstPostseasonGame.gameId && firstPostseasonGame.gameType === 'FIRST_SIXTEEN') {
      return true;
    }
    return false;
  }
  
  showNTRow(index: number | undefined): boolean {
    if (!index || !this.postseasonGames || this.postseasonGames.length === 0) {
      return false;
    }
  
    let nextGame = this.teamSummary?.games[index];
    if (!nextGame) {
      return false;
    }
    let firstPostseasonGame = this.postseasonGames[0];
    let secondPostseasonGame = null;
    if (this.postseasonGames.length > 1 && firstPostseasonGame.gameType == "FIRST_SIXTEEN") {
      secondPostseasonGame = this.postseasonGames[1];
      if (nextGame.gameId == secondPostseasonGame.gameId) {
        return true;
      }
    }
    if (firstPostseasonGame.gameId == nextGame.gameId && firstPostseasonGame.gameType == "MAIN_FIELD") {
      return true;
    }
    return false;
  }
  
  

  buildFinalRecordFromGames() {
    if (!this.teamSummary?.games || this.teamSummary.games?.length === 0) {
      return '0-0';
    }
  
    let games = this.teamSummary.games;
    let wins = 0;
    let losses = 0;
  
    for (const g of games) {

      let teamIdToSearchFor = this.teamSummary?.teamId;

      if (g.winningTeamId === teamIdToSearchFor) {
          wins++;
        } else {
          losses++;
        }
    }
  
    return wins + '-' + losses;

  }

  navigateToCoachSummary(coach: string | undefined) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }
}

