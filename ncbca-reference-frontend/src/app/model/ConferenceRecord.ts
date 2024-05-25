export class ConferenceRecord {
    teamName: string;
    conferenceName: string;
    overallRecord: string;
    conferenceRecord: string;
    season: number;
  
    constructor(teamName: string, conferenceName: string, overallRecord: string, conferenceRecord: string, season: number) {
      this.teamName = teamName;
      this.conferenceName = conferenceName;
      this.overallRecord = overallRecord;
      this.conferenceRecord = conferenceRecord;
      this.season = season;
    }
  }
  