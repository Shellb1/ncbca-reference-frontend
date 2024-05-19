import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';
import { DraftSummaryComponent } from './draft-summary/draft-summary.component';
import { CoachDirectoryComponent } from './coach-directory/coach-directory.component';
import { TeamSeasonSummaryComponent } from './team-season-summary/team-season-summary.component';
import { TeamDirectoryComponent } from './team-directory/team-directory.component';

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
        path: 'teamDirectory', component: TeamDirectoryComponent
    },
    {
        path: 'coachDirectory', component: CoachDirectoryComponent
    }
];
