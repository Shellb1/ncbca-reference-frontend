export class AllTimeProgramRanking {
    teamName: string;
    wins: number;
    losses: number;
    conference: string;
    championships: number;
    finalFours: number;
    eliteEights: number;
    sweetSixteens: number;
    tourneyAppearances: number;

    constructor(
        teamName: string,
        wins: number,
        losses: number,
        conference: string,
        championships: number,
        finalFours: number,
        eliteEights: number,
        sweetSixteens: number,
        tourneyAppearances: number
    ) {
        this.teamName = teamName;
        this.wins = wins;
        this.losses = losses;
        this.conference = conference;
        this.championships = championships;
        this.finalFours = finalFours;
        this.eliteEights = eliteEights;
        this.sweetSixteens = sweetSixteens;
        this.tourneyAppearances = tourneyAppearances;
    }
}
