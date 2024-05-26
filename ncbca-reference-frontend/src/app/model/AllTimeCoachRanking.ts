export class AllTimeCoachRanking {
    coachName: string;
    seasonsCoached: number;
    wins: number;
    losses: number;
    currentTeam: string;
    championships: number;
    finalFours: number;
    eliteEights: number;
    sweetSixteens: number;
    tourneyAppearances: number;

    constructor(
        coachName: string,
        seasonsCoached: number,
        wins: number,
        losses: number,
        currentTeam: string,
        championships: number,
        finalFours: number,
        eliteEights: number,
        sweetSixteens: number,
        tourneyAppearances: number
    ) {
        this.coachName = coachName;
        this.seasonsCoached = seasonsCoached;
        this.wins = wins;
        this.losses = losses;
        this.currentTeam = currentTeam;
        this.championships = championships;
        this.finalFours = finalFours;
        this.eliteEights = eliteEights;
        this.sweetSixteens = sweetSixteens;
        this.tourneyAppearances = tourneyAppearances;
    }
}
