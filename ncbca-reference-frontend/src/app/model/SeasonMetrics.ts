export class SeasonMetrics {
     teamName: string;
     teamId: number;
     season: number;
     rpi: number;
     sos: number;
    srs: any;
    q1Record: string;
    q2Record: string;
    q3Record: string;
    q4Record: string;

    constructor(
      teamName: string,
      teamId: number,
      season: number,
      rpi: number,
      sos: number,
      srs: number,
      q1Record: string,
      q2Record: string,
      q3Record: string,
      q4Record: string
    ) {
      this.teamName = teamName;
      this.teamId = teamId;
      this.season = season;
      this.rpi = rpi;
      this.sos = sos;
      this.srs = srs;
      this.q1Record = q1Record;
      this.q2Record = q2Record;
      this.q3Record = q3Record;
      this.q4Record = q4Record;
    }
}