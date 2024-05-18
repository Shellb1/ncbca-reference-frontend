export class DraftPick {
    playerName: string;
    collegeTeamName: string;
    round: number;
    pick: number;
    season: number;
    position: string;
    coachName: string;

    constructor(
        playerName: string,
        collegeTeamName: string,
        round: number,
        pick: number,
        season: number,
        position: string,
        coachName: string
    ) {
        this.playerName = playerName;
        this.collegeTeamName = collegeTeamName;
        this.round = round;
        this.pick = pick;
        this.season = season;
        this.position = position;
        this.coachName = coachName;
    }
}
