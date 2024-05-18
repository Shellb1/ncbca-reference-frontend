import { Component, OnInit } from '@angular/core';
import { SeasonsServiceService } from '../services/seasons-service.service';
import { Season } from '../model/Season';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-season',
  standalone: true,
  imports: [NgFor],
  templateUrl: './season.component.html',
  styleUrl: './season.component.scss'
})
export class SeasonComponent implements OnInit { 

  seasons: Season[] = [];
  season: number | undefined;

  constructor(private seasonsService: SeasonsServiceService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const year = params['year']; // Assuming the query parameter is named 'year'
      if (year) {
        this.loadSeasons(year);
        this.season = year;
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadSeasons(year: number): void {
    this.seasonsService.getSeasonsMatchingYear(year)
      .subscribe((seasons: Season[]) => {
        this.seasons = seasons;
      });
  }

  createRecord(gamesWon: Number, gamesLost: Number): string {
    return gamesWon + "-" + gamesLost;
  }

  navigateToCoachSummary(coach: string) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }
  

  navigateToTeamSummary(teamName: String | undefined, year: Number | undefined) {
    this.router.navigate(['/teamSummary'], { queryParams: { year: year, teamName: teamName} });
  }

}
