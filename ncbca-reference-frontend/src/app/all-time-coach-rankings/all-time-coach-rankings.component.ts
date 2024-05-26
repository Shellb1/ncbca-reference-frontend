import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AllTimeCoachRanking } from '../model/AllTimeCoachRanking';
import { ActivatedRoute, Router } from '@angular/router';
import { AllTimeCoachesService } from '../services/all-time-coaches-service';

@Component({
  selector: 'app-all-time-coach-rankings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-time-coach-rankings.component.html',
  styleUrl: './all-time-coach-rankings.component.scss'
})
export class AllTimeCoachRankingsComponent {

  allTimeCoachRankings: AllTimeCoachRanking[] = [];

  constructor(private route: ActivatedRoute, private allTimeCoachesService: AllTimeCoachesService, private router: Router) {}

  ngOnInit(): void {
   
    this.loadAllTimeCoachesRankings();

  }

  loadAllTimeCoachesRankings(): void {
    this.allTimeCoachesService.getAllTimeCoachRankings()
    .subscribe((allTimeCoachRankings: AllTimeCoachRanking[]) => {
      this.allTimeCoachRankings = allTimeCoachRankings;
      console.log(allTimeCoachRankings)
    });
  }

  navigateToCoachSummary(coach: string) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }

  navigateToTeamSummary(team: string) {
    this.router.navigate(['/teamSummary'], { queryParams: { teamName: team } });
  }
}
