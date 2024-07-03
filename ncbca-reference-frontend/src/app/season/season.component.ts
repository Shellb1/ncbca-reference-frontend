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
  sortSeasonsByRpi(): void {
    this.seasons = [...this.seasons].sort((a, b) => b.seasonMetrics.rpi - a.seasonMetrics.rpi);
  }

  sortSeasonsBySOS(): void {
    this.seasons = [...this.seasons].sort((a, b) => b.seasonMetrics.sos - a.seasonMetrics.sos);
  }

  sortSeasonsBySRS(): void {
    this.seasons = [...this.seasons].sort((a, b) => b.seasonMetrics.srs - a.seasonMetrics.srs);
  }


  sortSeasonsByRecord(): void {
    this.seasons = [...this.seasons].sort((a, b) => {
      const recordA = a.gamesWon - a.gamesLost;
      const recordB = b.gamesWon - b.gamesLost;
      return recordB - recordA;
    });
  }

  sortSeasonsByQ1(): void {
    this.seasons = [...this.seasons].sort((a, b) => {
      const q1A = Number(a.seasonMetrics.q1Record.split("-")[0]);
      const q1B = Number(b.seasonMetrics.q1Record.split("-")[0]);
      return q1B - q1A;
    });
  }

  sortSeasonsByQ2(): void {
    this.seasons = [...this.seasons].sort((a, b) => {
      const q2A = Number(a.seasonMetrics.q2Record.split("-")[0]);
      const q2B = Number(b.seasonMetrics.q2Record.split("-")[0]);
      return q2B - q2A;
    });
  }

  sortSeasonsByQ3(): void {
    this.seasons = [...this.seasons].sort((a, b) => {
      const q3A = Number(a.seasonMetrics.q3Record.split("-")[0]);
      const q3B = Number(b.seasonMetrics.q3Record.split("-")[0]);
      return q3B - q3A;
    });
  }

  sortSeasonsByQ4(): void {
    this.seasons = [...this.seasons].sort((a, b) => {
      const q4A = Number(a.seasonMetrics.q4Record.split("-")[0]);
      const q4B = Number(b.seasonMetrics.q4Record.split("-")[0]);
      return q4B - q4A;
    });
  }

  determineRPIRank(season: Season): number {
    const sortedSeasons = [...this.seasons].sort((a, b) => b.seasonMetrics.rpi - a.seasonMetrics.rpi);
    for (let i = 0; i < sortedSeasons.length; i++) {
      if (sortedSeasons[i].teamId === season.teamId && sortedSeasons[i].seasonYear === season.seasonYear) {
        return i + 1;
      }
    }
    return -1; // Return -1 if the season is not found in the list
  }

  determineSOSRank(season: Season): number {
    const sortedSeasons = [...this.seasons].sort((a, b) => b.seasonMetrics.sos - a.seasonMetrics.sos);
    for (let i = 0; i < sortedSeasons.length; i++) {
      if (sortedSeasons[i].teamId === season.teamId && sortedSeasons[i].seasonYear === season.seasonYear) {
        return i + 1;
      }
    }
    return -1; // Return -1 if the season is not found in the list
  }

  determineSRSRank(season: Season): number {
    const sortedSeasons = [...this.seasons].sort((a, b) => b.seasonMetrics.srs - a.seasonMetrics.srs);
    for (let i = 0; i < sortedSeasons.length; i++) {
      if (sortedSeasons[i].teamId === season.teamId && sortedSeasons[i].seasonYear === season.seasonYear) {
        return i + 1;
      }
    }
    return -1; // Return -1 if the season is not found in the list
  }

  navigateToCoachSummary(coach: string) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach } });
  }


  navigateToTeamSummary(teamName: String | undefined, year: Number | undefined) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { year: year, teamName: teamName } });
  }

}
