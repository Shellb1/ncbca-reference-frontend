import { SeasonMetrics } from "./SeasonMetrics";

export class Season {
  teamId: number;
  teamName: string;
  gamesWon: number;
  gamesLost: number;
  seasonYear: number;
  coach: string;
  conferenceName: string;
  seasonMetrics: SeasonMetrics;
  ntSeed: number;

  constructor(teamId: number, teamName: string, gamesWon: number, gamesLost: number, seasonYear: number, coach: string, conferenceName: string, seasonMetrics: SeasonMetrics, ntSeed: number) {
    this.teamId = teamId;
    this.teamName = teamName;
    this.gamesWon = gamesWon;
    this.gamesLost = gamesLost;
    this.seasonYear = seasonYear;
    this.coach = coach;
    this.conferenceName = conferenceName;
    this.seasonMetrics = seasonMetrics;
    this.ntSeed = ntSeed;
  }

}