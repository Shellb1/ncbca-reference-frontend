import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllTimeProgramsService } from '../services/all-time-programs-service';
import { AllTimeProgramRanking } from '../model/AllTimeProgramRanking';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-time-program-rankings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './all-time-program-rankings.component.html',
  styleUrl: './all-time-program-rankings.component.scss'
})
export class AllTimeProgramRankingsComponent implements OnInit {

  allTimeProgramRankings: AllTimeProgramRanking[] = [];

  constructor(private route: ActivatedRoute, private allTimeProgramsService: AllTimeProgramsService, private router: Router) {}

  ngOnInit(): void {
   
    this.loadAllTimeProgramRankings();

  }

  loadAllTimeProgramRankings(): void {
    this.allTimeProgramsService.getAllTimeProgramRankings()
    .subscribe((allTimeProgramRankings: AllTimeProgramRanking[]) => {
      this.allTimeProgramRankings = allTimeProgramRankings;
      console.log(allTimeProgramRankings)
    });
  }

  navigateToTeamSummary(teamName: string) {
    this.router.navigate(['/teamSummary'], { queryParams: { teamName: teamName } });
  }

}
