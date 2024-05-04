export class Game {
    gameId: number;
    season: number;
    neutralSite: boolean;
    homeTeamId: number;
    awayTeamId: number;
    homeTeamName: string;
    awayTeamName: string;
    winningTeamId: number;
    winningTeamName: string;
    winningTeamScore: number;
    losingTeamId: number;
    losingTeamName: string;
    losingTeamScore: number;

    constructor(
        gameId: number,
        season: number,
        neutralSite: boolean,
        homeTeamId: number,
        awayTeamId: number,
        homeTeamName: string,
        awayTeamName: string,
        winningTeamId: number,
        winningTeamName: string,
        winningTeamScore: number,
        losingTeamId: number,
        losingTeamName: string,
        losingTeamScore: number
    ) {
        this.gameId = gameId;
        this.season = season;
        this.neutralSite = neutralSite;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.homeTeamName = homeTeamName;
        this.awayTeamName = awayTeamName;
        this.winningTeamId = winningTeamId;
        this.winningTeamName = winningTeamName;
        this.winningTeamScore = winningTeamScore;
        this.losingTeamId = losingTeamId;
        this.losingTeamName = losingTeamName;
        this.losingTeamScore = losingTeamScore;
    }
}
