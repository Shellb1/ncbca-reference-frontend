import { DraftPick } from "./DraftPick";
import { PostseasonGame } from "./PostseasonGame";
import { Season } from "./Season";
import { Team } from "./Team";

export class TeamSummary {
  team: Team;
  seasons: Season[];
  draftPicks: DraftPick[];
  postseasonGames: PostseasonGame[];

  constructor(
    team: Team,
    seasons: Season[],
    draftPicks: DraftPick[],
    postseasonGames: PostseasonGame[]
  ) {
    this.team = team;
    this.seasons = seasons;
    this.draftPicks = draftPicks;
    this.postseasonGames = postseasonGames;
  }
}
