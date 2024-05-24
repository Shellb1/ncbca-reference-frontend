import { DraftPick } from "./DraftPick";
import { Game } from "./Game";
import { Season } from "./Season";
import { Team } from "./Team";

export class TeamSummary {
  team: Team;
  seasons: Season[];
  draftPicks: DraftPick[];
  games: Game[];

  constructor(
    team: Team,
    seasons: Season[],
    draftPicks: DraftPick[],
    games: Game[]
  ) {
    this.team = team;
    this.seasons = seasons;
    this.draftPicks = draftPicks;
    this.games = games;
  }
}
