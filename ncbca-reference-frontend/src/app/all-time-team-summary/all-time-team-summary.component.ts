import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../model/Team';
import { AllTeamsService } from '../services/all-teams-service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-all-time-team-summary',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './all-time-team-summary.component.html',
  styleUrl: './all-time-team-summary.component.scss'
})
export class AllTimeTeamSummaryComponent implements OnInit {

  teams: Team[] = [];

  public constructor(private route: ActivatedRoute, private teamsService: AllTeamsService, private router: Router) {}


  ngOnInit(): void {

    this.listAllTeams();
  }

  listAllTeams(): void {
    this.teamsService.getAllTeams()
      .subscribe((teams: Team[]) => {
        // Sort teams by conference name
        teams.sort((a, b) => {
          if (a.conferenceName < b.conferenceName) {
            return -1;
          }
          if (a.conferenceName > b.conferenceName) {
            return 1;
          }
          return 0;
        });
  
        // Assign sorted teams to the property
        this.teams = teams;
      });
  }
  

  navigateToAllTimeTeamSummary(team: string): void {
    console.log(team);
  }
}
