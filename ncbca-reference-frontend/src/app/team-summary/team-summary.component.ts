import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamSummaryService } from '../services/team-summary.service';
import { TeamSummary } from '../model/TeamSummary';
import { Game } from '../model/Game';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NitGame } from '../model/NitGame';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.scss'
})
export class TeamSummaryComponent implements OnInit {

  teamSummary: TeamSummary | undefined;
  nitGames: NitGame[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      const teamName = params['teamName']
      if (year && teamName) {
        this.loadTeamSummary(teamName, year);
        this.loadNitTeamsForYear(year);
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

  loadNitTeamsForYear(year: Number): void {
    this.teamSummaryService.getNitGames(year)
      .subscribe((games: NitGame[]) => {
        this.nitGames = games;
        console.log(games);
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
    if (!games || games?.length < 12) {
      return '0-0';
    } else if (this.gameIsOutOfConferencePlay(game, games)) {
      return '';
    }
    
    else {
      for (let i = 13; i < games.length; i++) {
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
    if (gamesCount < 13 || gamesCount > 33) {
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

  showNITRow(index: number | undefined, game: Game | undefined): boolean {
    if (index === undefined) {
      return false;
    }
  
    if (!this.nitGames || this.nitGames.length === 0) {
      return false;
    }
  
    let nextGame = this.teamSummary?.games[index + 1];
    if (!nextGame) {
      return false;
    }

    for (let j = 0; j < this.nitGames?.length; j++) {
      // not a great solution since NIT could expand but will deal with it when we do!
      if (nextGame.gameId === this.nitGames[j].gameId && j < 8) {
        return true;
      }
    }
    return false;
  }
}

