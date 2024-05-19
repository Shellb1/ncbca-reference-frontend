import { Component, OnInit } from '@angular/core';
import { Coach } from '../model/Coach';
import { NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AllCoachesService } from '../services/all-coaches-service';

@Component({
  selector: 'app-all-time-coach-summary',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './all-time-coach-summary.component.html',
  styleUrl: './all-time-coach-summary.component.scss'
})
export class AllTimeCoachSummaryComponent implements OnInit {

  coaches: Coach[] = []

  public constructor(private route: ActivatedRoute, private coachesService: AllCoachesService, private router: Router) {}

  ngOnInit(): void {

    this.listAllCoaches();
  }

  listAllCoaches(): void {
    this.coachesService.getAllCoaches()
      .subscribe((coaches: Coach[]) => {
        this.coaches = coaches.map(coach => {
          if (coach.endSeason === 0) {
            coach.endSeason = null;
          }
          return coach;
        });
      });
  }
  
  

  navigateToAllTimeTeamSummary(team: string): void {
    console.log(team);
  }

  navigateToAllTimeCoachSummary(coach: string): void {
    console.log(coach);
  }
}
