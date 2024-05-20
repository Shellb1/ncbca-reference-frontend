import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamSummary } from '../model/TeamSummary';
import { TeamSummaryService } from '../services/team-summary-service';
import { NgFor } from '@angular/common';
import { Season } from '../model/Season';
import { PostseasonGame } from '../model/PostseasonGame';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.scss'
})
export class TeamSummaryComponent implements OnInit {

  teamSummary: TeamSummary | undefined;

  public constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const teamName = params['teamName']
      if (teamName) {
        this.loadTeamSummary(teamName);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadTeamSummary(teamName: string): void {
    this.teamSummaryService.getTeamSummary(teamName)
      .subscribe((teamSummary: TeamSummary) => {
        this.teamSummary = teamSummary;
      });
  }

  determinePostseasonStatus(season: Season): string {
    let postseasonGames: PostseasonGame[] = []
    if (this.teamSummary !== undefined && this.teamSummary.postseasonGames != undefined) {
      for (let i = 0; i < this.teamSummary.postseasonGames.length; i++) {
        if (this.teamSummary.postseasonGames[i].season == season.seasonYear && (this.teamSummary.postseasonGames[i].losingTeamName == season.teamName || this.teamSummary.postseasonGames[i].winningTeamName == season.teamName)) {
          postseasonGames.push(this.teamSummary.postseasonGames[i]);
        }
      }
    }

    // for no postseason
    if (postseasonGames.length == 0) {
      return 'None';
    }

    // NIT teams
    if (postseasonGames[0].gameType == 'NIT') {
      return "NIT";
    }
    
    // first sixteen teams that lost
    if (postseasonGames[0].gameType == 'FIRST_SIXTEEN' && postseasonGames.length == 1) {
      return 'First Sixteen';
    }

    // first sixteen teams that won
    if (postseasonGames[0].gameType == 'FIRST_SIXTEEN' && postseasonGames.length > 1) {
      if (postseasonGames.length == 2) {
        return 'R32';
      } else if (postseasonGames.length == 3) {
        return 'Sweet 16';
      } else if (postseasonGames.length == 4) {
        return 'Elite 8';
      } else if (postseasonGames.length == 5) {
        return 'Final 4';
      } else if (postseasonGames.length == 6 && postseasonGames[5].losingTeamName == season.teamName) {
        return 'Runner-up';
      } else if (postseasonGames.length == 6 && postseasonGames[5].winningTeamName == season.teamName) {
        return 'National Champion';
      }
    }

    // main NT teams
    if (postseasonGames[0].gameType == 'MAIN_FIELD') {
      if (postseasonGames.length == 1) {
        return 'R32';
      } else if (postseasonGames.length == 2) {
        return 'Sweet 16';
      } else if (postseasonGames.length == 3) {
        return 'Elite 8';
      } else if (postseasonGames.length == 4) {
        return 'Final 4';
      } else if (postseasonGames.length == 5 && postseasonGames[4].losingTeamName == season.teamName) {
        return 'Runner-up';
      } else if (postseasonGames.length == 5 && postseasonGames[4].winningTeamName == season.teamName) {
        return 'National Champion';
      }
    }

    return 'UNKNOWN_POSTSEASON';
  }

  navigateToTeamSummary(year: number | undefined, teamName: string | undefined) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { year: year, teamName: teamName} });
}

  navigateToCoachSummary(coach: string | undefined) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach}});
  } 


}
