import { Component } from '@angular/core';
import { DraftPick } from '../model/DraftPick';
import { ActivatedRoute, Router } from '@angular/router';
import { DraftPicksService } from '../services/draft-picks-service'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-draft-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './draft-summary.component.html',
  styleUrl: './draft-summary.component.scss'
})
export class DraftSummaryComponent {

  season: number | undefined;
  draftPicks: DraftPick[] = [];

  constructor(private draftPicksService: DraftPicksService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      if (year) {
        this.loadDraftPicks(year);
        this.season = year;
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadDraftPicks(year: number): void {
    this.draftPicksService.getDraftPicks(year)
      .subscribe((draftPicks: DraftPick[]) => {
        draftPicks.sort((a, b) => {
          // Sort by round
          if (a.round !== b.round) {
            return a.round - b.round;
          }
          // If round is same, sort by pick
          return a.pick - b.pick;
        });
  
        // Assign sorted draft picks to the property
        this.draftPicks = draftPicks;
      });
  }

navigateToTeamSummary(teamName: String | undefined) {
  this.router.navigate(['/teamSummary'], { queryParams: { teamName: teamName } });
}

navigateToCoachSummary(coach: String) {
  this.router.navigate(['/coachSummary'], { queryParams: { coach: coach}});
} 
}
