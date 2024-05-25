import { ConferenceRecord } from "./ConferenceRecord";

export class ConferenceSummary {
    conferenceName: string;
    conferenceRecordList: ConferenceRecord[];
    season: number;
  
    constructor(conferenceName: string, conferenceRecordList: ConferenceRecord[], season: number) {
      this.conferenceName = conferenceName;
      this.conferenceRecordList = conferenceRecordList;
      this.season = season;
    }
  }