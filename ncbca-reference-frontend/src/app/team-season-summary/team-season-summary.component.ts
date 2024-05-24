import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Game } from '../model/Game';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TeamSeasonSummary } from '../model/TeamSeasonSummary';
import { TeamSeasonSummaryService } from '../services/team-season-summary.service';

@Component({
  selector: 'app-team-season-summary',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterModule],
  templateUrl: './team-season-summary.component.html',
  styleUrl: './team-season-summary.component.scss'
})
export class TeamSeasonSummaryComponent implements OnInit {

  teamSeasonSummary: TeamSeasonSummary | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSeasonSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      const teamName = params['teamName']
      if (year && teamName) {
        this.loadTeamSeasonSummary(teamName, year);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadTeamSeasonSummary(teamName: string, year: Number): void {
    this.teamSummaryService.getTeamSeasonSummary(teamName, year)
      .subscribe((teamSeasonSummary: TeamSeasonSummary) => {
        this.teamSeasonSummary = teamSeasonSummary;
      });
  }

  determineOpponent(game: Game) {
    let teamName = this.teamSeasonSummary?.teamName;
    if (game.awayTeamName == teamName) {
      return game.homeTeamName;
    } else {
      return game.awayTeamName;
    }
  }

  determineResult(game: Game) {
    let teamName = this.teamSeasonSummary?.teamName;
    let result;
    if (game.winningTeamName == teamName) {
      result = 'W, ' + game.winningTeamScore + '-' + game.losingTeamScore;
    } else {
      result = 'L, ' + game.losingTeamScore + '-' + game.winningTeamScore;
    }
    return result;

  }

  determineLocation(game: Game) {
    let teamName = this.teamSeasonSummary?.teamName;
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

      let teamIdToSearchFor = this.teamSeasonSummary?.teamId;

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
        let teamIdToSearchFor = this.teamSeasonSummary?.teamId;
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

  navigateToTeamSeasonSummary(year: Number | undefined, teamName: String | undefined) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { year: year, teamName: teamName} });
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
    if (game.winningTeamId == this.teamSeasonSummary?.teamId) {
      return 'Win';
    } else {
      return 'Loss'
    }
  }

  showNITRow(index: number | undefined): boolean {
    if (!index) {
      return false;
    }
    let nextGame = this.teamSeasonSummary?.games[index];
    if (!nextGame) {
      return false;
    }
  
    // Find the corresponding postseason game
    let firstPostseasonGame = this.getFirstPostseasonGame(this.teamSeasonSummary?.games);
    
    if (nextGame.gameId == firstPostseasonGame?.gameId && firstPostseasonGame?.gameType === 'NIT') {
      return true;
    }
    return false;
  }
  
  showFirstSixteenRow(index: number | undefined): boolean {
    if (!index) {
      return false;
    }
  
    let nextGame = this.teamSeasonSummary?.games[index];
    if (!nextGame) {
      return false;
    }
  
    // Find the corresponding postseason game
    let firstPostseasonGame = this.getFirstPostseasonGame(this.teamSeasonSummary?.games)

    if (nextGame.gameId == firstPostseasonGame?.gameId && firstPostseasonGame.gameType === 'FIRST_SIXTEEN') {
      return true;
    }
    return false;
  }
  
  showNTRow(nextIndex: number | undefined): boolean {
    if (!nextIndex) {
      return false;
    }
    
    let nextGame = this.teamSeasonSummary?.games[nextIndex];
    if (!nextGame) {
      return false;
    }
    let firstPostseasonGame = this.getFirstPostseasonGame(this.teamSeasonSummary?.games);
    let secondPostseasonGame = null;
    if (firstPostseasonGame?.gameType == "FIRST_SIXTEEN") {
      secondPostseasonGame = this.getSecondPostseasongame(this.teamSeasonSummary?.games);
      if (nextGame.gameId == secondPostseasonGame?.gameId) {
        return true;
      }
    }
    if (firstPostseasonGame?.gameId == nextGame.gameId && firstPostseasonGame.gameType == "NT") {
      return true;
    }
    return false;
  }
  
  

  buildFinalRecordFromGames() {
    if (!this.teamSeasonSummary?.games || this.teamSeasonSummary.games?.length === 0) {
      return '0-0';
    }
  
    let games = this.teamSeasonSummary.games;
    let wins = 0;
    let losses = 0;
  
    for (const g of games) {

      let teamIdToSearchFor = this.teamSeasonSummary?.teamId;

      if (g.winningTeamId === teamIdToSearchFor) {
          wins++;
        } else {
          losses++;
        }
    }
  
    return wins + '-' + losses;

  }

  getFirstPostseasonGame(games: Game[] | undefined): Game | null {
    if (!games) {
      return null;
    }
    for (let i = 0; i < games.length; i++) {
      if (games[i].gameType == 'NIT') {
        return games[i];
      } else if (games[i].gameType == 'FIRST_SIXTEEN') {
        return games[i];
      } else if (games[i].gameType == 'NT') {
        return games[i];
      }
    }
    return null;
  }

  getSecondPostseasongame(games: Game[] | undefined): Game | null {
    if (!games) {
      return null;
    }
    for (let i = 0; i < games.length; i++) {
      if (games[i].gameType == 'FIRST_SIXTEEN' && (i + 1 != games.length)) {
        return games[i + 1];
      }
    }
    return null;
  }

  navigateToCoachSummary(coach: string | undefined) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }
}

