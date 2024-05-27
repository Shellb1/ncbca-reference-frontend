import { DraftPick } from "./DraftPick";
import { Game } from "./Game";
import { Season } from "./Season";
import { Team } from "./Team";
import { NTSeed } from "./NTSeed";

export class TeamSummary {
  team: Team;
  seasons: Season[];
  draftPicks: DraftPick[];
  games: Game[];
  ntSeeds: NTSeed[];

  constructor(
    team: Team,
    seasons: Season[],
    draftPicks: DraftPick[],
    games: Game[],
    ntSeeds: NTSeed[]
  ) {
    this.team = team;
    this.seasons = seasons;
    this.draftPicks = draftPicks;
    this.games = games;
    this.ntSeeds = ntSeeds;
  }
}
