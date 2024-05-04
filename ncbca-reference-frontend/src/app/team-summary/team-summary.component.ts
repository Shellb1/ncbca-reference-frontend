import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamSummaryService } from '../services/team-summary.service';
import { TeamSummary } from '../model/TeamSummary';
import { Game } from '../model/Game';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.scss'
})
export class TeamSummaryComponent implements OnInit {

  teamSummary: TeamSummary | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      const teamName = params['teamName']
      if (year && teamName) {
        this.loadTeamSummary(teamName, year);
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
    if (!games || games?.length < 12) {
      return '0-0';
    } else {
      let wins = 0;
      let losses = 0;
      for (let i = 13; i < games.length; i++) {
        
      }
    }
    return '';
  }

  navigateToTeamSummary(year: Number | undefined, teamName: String | undefined) {
    this.router.navigate(['/teamSummary'], { queryParams: { year: year, teamName: teamName} });
  }


}
