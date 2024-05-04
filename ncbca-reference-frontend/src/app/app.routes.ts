import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';

export const routes: Routes = [
    {
        path: 'season', component: SeasonComponent
    },
    {
        path: 'coachSummary', component: CoachComponent
    },
    {
        path: 'teamSummary', component: TeamSummaryComponent
    }
];
