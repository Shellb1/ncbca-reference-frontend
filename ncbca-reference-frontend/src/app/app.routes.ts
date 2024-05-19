import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';
import { DraftSummaryComponent } from './draft-summary/draft-summary.component';
import { AllTimeTeamSummaryComponent } from './all-time-team-summary/all-time-team-summary.component';
import { AllTimeCoachSummaryComponent } from './all-time-coach-summary/all-time-coach-summary.component';
import { TeamSeasonSummaryComponent } from './team-season-summary/team-season-summary.component';

export const routes: Routes = [
    {
        path: 'season', component: SeasonComponent
    },
    {
        path: 'coachSummary', component: CoachComponent
    },
    {
        path: 'teamSeasonSummary', component: TeamSeasonSummaryComponent
    },
    {
        path: 'draftSummary', component: DraftSummaryComponent
    },
    {
        path: 'allTimeTeamSummary', component: AllTimeTeamSummaryComponent
    },
    {
        path: 'allTimeCoachSummary', component: AllTimeCoachSummaryComponent
    }
];
