import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamSummary } from '../model/TeamSummary';
import { TeamSummaryService } from '../services/team-summary-service';
import { NgFor } from '@angular/common';
import { Season } from '../model/Season';
import { Game } from '../model/Game';
import { NTSeed } from '../model/NTSeed';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.scss'
})
export class TeamSummaryComponent implements OnInit {

  teamSummary: TeamSummary | undefined;

  public constructor(private route: ActivatedRoute, private router: Router, private teamSummaryService: TeamSummaryService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const teamName = params['teamName']
      if (teamName) {
        this.loadTeamSummary(teamName);
      } else {
        // Handle case when query parameter is not provided
      }
    });
  }

  loadTeamSummary(teamName: string): void {
    this.teamSummaryService.getTeamSummary(teamName)
      .subscribe((teamSummary: TeamSummary) => {
        this.teamSummary = teamSummary;
        this.teamSummary.draftPicks = this.teamSummary.draftPicks.sort((a, b) => {
          // Sort by season
          if (a.season !== b.season) {
            return a.season - b.season;
          }
          // If season is same, sort by round
          if (a.round !== b.round) {
            return a.round - b.round;
          }
          // If round is same, sort by pick
          return a.pick - b.pick;
        });
      });
  }

  determinePostseasonStatus(season: Season): string {
    
    if (!this.teamSummary?.games.length) {
      return 'UNKNOWN_POSTSEASON';
    }
    
    // for no postseason
    if (this.teamSummary?.games?.length == 0) {
      return 'None';
    }

    
    let games = this.teamSummary.games;
    let gamesForSeason: Game[] = [];
    
    games.forEach(teamGame => {
      if (teamGame.season == season.seasonYear) {
        gamesForSeason.push(teamGame);
      }
    })
    let hasPostSeason = false;

    // NIT
    for (let i = 0; i < gamesForSeason.length; i++) {
      if (gamesForSeason[i].gameType == 'NIT') {
        return 'NIT';
      }
    }

    let hasFirstSixteen = false;
    let hasNt = false;
    let ntGamesCount = 0;
    for (let i = 0; i < gamesForSeason.length; i++) {
      if (gamesForSeason[i].gameType == 'FIRST_SIXTEEN') {
        hasFirstSixteen = true;
      }
      if (gamesForSeason[i].gameType == 'NT') {
        hasNt = true;
        ntGamesCount++;
      }
    }

    // first sixteen no NT
    if (hasFirstSixteen && !hasNt) {
      return 'First Sixteen'
    }

    if (ntGamesCount == 1) {
      return 'R32';
    } else if (ntGamesCount == 2) {
      return 'Sweet 16';
    } else if (ntGamesCount == 3) {
      return 'Elite 8';
    } else if (ntGamesCount == 4) {
      return 'Final 4';
    } else if (ntGamesCount == 5) {
      let lastIndex = gamesForSeason.length - 1;
      let lastgame = gamesForSeason[lastIndex];
      if (lastgame.winningTeamId == season.teamId) {
          return 'National Champion⭐';
      } else {
        return 'Runner-Up';
      }
    }
   
    return 'No Postseason';
  }

  determineNTSeedForSeason(season: Season): number | null {
    let year = season.seasonYear;
    let ntSeedForYearIfExists: NTSeed | undefined = this.teamSummary?.ntSeeds.find(ntSeed => ntSeed.season == year);
    if (ntSeedForYearIfExists) {
        return ntSeedForYearIfExists.seed;
    }
    return null;
  }

  navigateToTeamSummary(year: number | undefined, teamName: string | undefined) {
    this.router.navigate(['/teamSeasonSummary'], { queryParams: { year: year, teamName: teamName} });
}

  navigateToCoachSummary(coach: string | undefined) {
    this.router.navigate(['/coachSummary'], { queryParams: { coach: coach}});
  } 

  navigateToDraftSummary(year: number | undefined) {
    this.router.navigate(['/draftSummary'], { queryParams: { year: year}});
  } 

}
