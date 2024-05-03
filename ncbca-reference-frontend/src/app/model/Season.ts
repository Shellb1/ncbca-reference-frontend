export class Season {
    teamId: number;
    teamName: string;
    gamesWon: number;
    gamesLost: number;
    seasonYear: number;
    coach: string;
  
    constructor(teamId: number, teamName: string, gamesWon: number, gamesLost: number, seasonYear: number, coach: string) {
      this.teamId = teamId;
      this.teamName = teamName;
      this.gamesWon = gamesWon;
      this.gamesLost = gamesLost;
      this.seasonYear = seasonYear;
      this.coach = coach;
    }
  
  }