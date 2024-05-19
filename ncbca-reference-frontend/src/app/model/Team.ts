export class Team {
    teamId: number;
    name: string;
    conferenceId: number;
    conferenceName: string;
    coach: string;
    active: boolean;
  
    constructor(teamId: number, name: string, conferenceId: number, conferenceName: string, coach: string, active: boolean) {
      this.teamId = teamId;
      this.name = name;
      this.conferenceId = conferenceId;
      this.conferenceName = conferenceName;
      this.coach = coach;
      this.active = active;
    }
}