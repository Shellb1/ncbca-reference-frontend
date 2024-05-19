import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';
import { DraftSummaryComponent } from './draft-summary/draft-summary.component';
import { AllTimeTeamSummaryComponent } from './all-time-team-summary/all-time-team-summary.component';
import { AllTimeCoachSummaryComponent } from './all-time-coach-summary/all-time-coach-summary.component';

export const routes: Routes = [
    {
        path: 'season', component: SeasonComponent
    },
    {
        path: 'coachSummary', component: CoachComponent
    },
    {
        path: 'teamSummary', component: TeamSummaryComponent
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
