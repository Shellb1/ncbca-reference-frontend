import { Component, OnInit } from '@angular/core';
import { Coach } from '../model/Coach';
import { NgClass, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachDirectoryService } from '../services/coach-directory-service';

@Component({
  selector: 'app-coach-directory',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './coach-directory.component.html',
  styleUrl: './coach-directory.component.scss'
})
export class CoachDirectoryComponent implements OnInit {

  coaches: Coach[] = []

  public constructor(private route: ActivatedRoute, private coachesService: CoachDirectoryService, private router: Router) {}

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

  navigateToCoachSummary(coach: string): void {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }
}
