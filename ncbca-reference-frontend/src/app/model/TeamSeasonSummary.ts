import { Game } from "./Game";

export class TeamSeasonSummary {
    teamId: number;
    teamName: string;
    gamesWon: number;
    gamesLost: number;
    seasonYear: number;
    coach: string;
    games: Game[];
    seed: number;
  
    constructor(teamId: number, teamName: string, gamesWon: number, gamesLost: number, seasonYear: number, coach: string, games: Game[], seed: number) {
      this.teamId = teamId;
      this.teamName = teamName;
      this.gamesWon = gamesWon;
      this.gamesLost = gamesLost;
      this.seasonYear = seasonYear;
      this.coach = coach;
      this.games = games;
      this.seed = seed;
    }
  
  }