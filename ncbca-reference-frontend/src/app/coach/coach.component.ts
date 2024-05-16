import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CoachesService } from '../services/coaches-service.service';
import { CoachSummary } from '../model/CoachSummary';
import { NgFor, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-coach',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterModule, KeyValuePipe],
  templateUrl: './coach.component.html',
  styleUrl: './coach.component.scss'
})
export class CoachComponent implements OnInit {

  coachSummary: CoachSummary | undefined;
  coachSummaryFor: String | null | undefined;
  coachRecordMap: Map<String, String> | undefined;

  constructor(private route: ActivatedRoute, private coachesService: CoachesService, private router: Router) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const coach = params['coach']; 
      this.coachSummaryFor = coach;
      if (coach) {
        this.loadCoachSummary(coach);
        this.loadCoachRecordVersusOtherCoaches(coach);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadCoachSummary(coach: string): void {
    this.coachesService.getCoachSummary(coach)
      .subscribe((coachSummary: CoachSummary) => {
        this.coachSummary = coachSummary;
      });
  }

  loadCoachRecordVersusOtherCoaches(coach: string): void {
    this.coachesService.getAllTimeRecordVersusOtherCoaches(coach)
      .subscribe((coachesRecordMap: Map<String, String>) => {
        this.coachRecordMap = coachesRecordMap;
      });
  }


  createRecord(gamesWon: Number, gamesLost: Number): string {
    return gamesWon + "-" + gamesLost;
  }

  navigateToTeamSummary(year: Number, teamName: String) {
      this.router.navigate(['/teamSummary'], { queryParams: { year: year, teamName: teamName} });
  }
  
  navigateToCoachSummary(coach: String) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach}});
  } 
}