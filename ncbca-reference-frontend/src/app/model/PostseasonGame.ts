export class PostseasonGame {
    gameId: number;
    season: number;
    winningTeamId: number;
    losingTeamId: number;
    winningTeamScore: number;
    losingTeamScore: number;
    winningTeamName: string;
    losingTeamName: string;
    gameType: string;

    constructor(
        gameId: number,
        season: number,
        winningTeamId: number,
        losingTeamId: number,
        winningTeamScore: number,
        losingTeamScore: number,
        winningTeamName: string,
        losingTeamName: string,
        gameType: string
    ) {
        this.gameId = gameId;
        this.season = season;
        this.winningTeamId = winningTeamId;
        this.losingTeamId = losingTeamId;
        this.winningTeamScore = winningTeamScore;
        this.losingTeamScore = losingTeamScore;
        this.winningTeamName = winningTeamName;
        this.losingTeamName = losingTeamName;
        this.gameType = gameType;
    }
}
