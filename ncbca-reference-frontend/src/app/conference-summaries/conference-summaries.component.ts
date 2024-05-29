import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceSummaryService } from '../services/conference-summary-service';
import { ConferenceSummary } from '../model/ConferenceSummary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-conference-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './conference-summaries.component.html',
  styleUrl: './conference-summaries.component.scss'
})
export class ConferenceSummariesComponent {
  
  conferenceSummaries: ConferenceSummary[] = [];

  constructor(private route: ActivatedRoute, private conferenceSummaryService: ConferenceSummaryService, private router: Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; 
      if (year) {
        this.loadConferenceSummaries(year);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadConferenceSummaries(year: number): void {
    this.conferenceSummaryService.getConferenceSummariesForYear(year)
    .subscribe((conferenceSummaries: ConferenceSummary[]) => {
      this.conferenceSummaries = conferenceSummaries;
      console.log(conferenceSummaries);
    });
  }

  navigateToTeamSeasonSummary(teamName: string, season: number) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { teamName: teamName, year: season} });
  }

}
