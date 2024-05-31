export class SeasonMetrics {
     teamName: string;
     teamId: number;
     season: number;
     rpi: number;
     sos: number;
     srs: number;

    constructor(
      teamName: string,
      teamId: number,
      season: number,
      rpi: number,
      sos: number,
      srs: number
    ) {
      this.teamName = teamName;
      this.teamId = teamId;
      this.season = season;
      this.rpi = rpi;
      this.sos = sos;
      this.srs = srs;
    }
}