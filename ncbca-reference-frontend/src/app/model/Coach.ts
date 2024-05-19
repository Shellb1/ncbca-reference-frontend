export class Coach {
    coachName: string;
    startSeason: number;
    endSeason: number | null;
    active: boolean;
    currentTeam: string;
  
    constructor(
      coachName: string,
      startSeason: number,
      endSeason: number,
      active: boolean,
      currentTeam: string
    ) {
      this.coachName = coachName;
      this.startSeason = startSeason;
      this.endSeason = endSeason;
      this.active = active;
      this.currentTeam = currentTeam;
    }
  }
  