import { Routes } from '@angular/router';
import { SeasonComponent } from './season/season.component';
import { CoachComponent } from './coach/coach.component';
import { DraftSummaryComponent } from './draft-summary/draft-summary.component';
import { CoachDirectoryComponent } from './coach-directory/coach-directory.component';
import { TeamSeasonSummaryComponent } from './team-season-summary/team-season-summary.component';
import { TeamDirectoryComponent } from './team-directory/team-directory.component';
import { TeamSummaryComponent } from './team-summary/team-summary.component';
import { ConferenceDirectoryComponent } from './conference-directory/conference-directory.component';
import { ConferenceSummaryComponent } from './conference-summary/conference-summary.component';
import { AllTimeProgramRankingsComponent } from './all-time-program-rankings/all-time-program-rankings.component';
import { AllTimeCoachRankingsComponent } from './all-time-coach-rankings/all-time-coach-rankings.component';

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
    },
    {
        path: 'teamSummary', component: TeamSummaryComponent
    },
    {
        path: 'conferenceDirectory', component: ConferenceDirectoryComponent
    },
    {
        path: 'conferenceSummary', component: ConferenceSummaryComponent
    },
    {
        path: 'allTimeProgramRankings', component: AllTimeProgramRankingsComponent
    },
    {
        path: 'allTimeCoachRankings', component: AllTimeCoachRankingsComponent
    }
];
