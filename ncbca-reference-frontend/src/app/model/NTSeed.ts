export class NTSeed {
    teamId: number;
    teamName: string;
    season: number;
    seed: number;

    constructor(teamId: number, teamName: string, season: number, seed: number) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.season = season;
        this.seed = seed;
    }
}
  