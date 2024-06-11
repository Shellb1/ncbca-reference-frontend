import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConferenceSummaryService } from '../services/conference-summary-service';
import { ConferenceSummary } from '../model/ConferenceSummary';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-conference-summary',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './conference-summary.component.html',
  styleUrl: './conference-summary.component.scss'
})
export class ConferenceSummaryComponent implements OnInit {

  conferenceSummary: ConferenceSummary | undefined;
  constructor(private route: ActivatedRoute, private conferenceSummaryService: ConferenceSummaryService, private router: Router) {}
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const conferenceName = params['conferenceName']; 
      const season = params['season'];
      if (conferenceName) {
        this.loadConferenceSummary(conferenceName, season);
      }
    });
  }

  loadConferenceSummary(conferenceName: string, season: number): void {
    this.conferenceSummaryService.getConferenceSummaryForConference(conferenceName, season)
      .subscribe((conferenceSummary: ConferenceSummary) => {
        this.conferenceSummary = conferenceSummary;
      });
  }
  
  navigateToTeamSeasonSummary(teamName: string, season: number) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { teamName: teamName, year: season} });
  }

}
