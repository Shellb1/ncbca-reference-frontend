import { Season } from "./Season";

export class CoachSummary {
    coachName: string;
    seasonsCoached: Season[]
  
    constructor(coachName: string, seasonsCoached: Season[]) {
      this.coachName = coachName;
      this.seasonsCoached = seasonsCoached;
    }
  
  }