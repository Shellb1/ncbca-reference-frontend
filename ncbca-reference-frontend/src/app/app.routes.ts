import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';

export const routes: Routes = [
    {
        path: 'season', component: SeasonComponent
    },
    {
        path: 'coachSummary', component: CoachComponent
    }
];
