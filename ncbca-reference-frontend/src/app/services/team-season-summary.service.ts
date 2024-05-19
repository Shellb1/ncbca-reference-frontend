import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSeasonSummary } from '../model/TeamSeasonSummary';
import { PostseasonGame } from '../model/PostseasonGame';

@Injectable({
  providedIn: 'root'
})
export class TeamSeasonSummaryService {
  
  constructor(private http: HttpClient) {}

  getTeamSeasonSummary(teamName: String, year: Number): Observable<TeamSeasonSummary> {
    return this.http.get<TeamSeasonSummary>(`/ncbca-reference-backend/teamSeasonSummary?teamName=${teamName}&year=${year}`);
  }

  getPostseasonGames(year: Number, teamName: String): Observable<PostseasonGame[]> {
    return this.http.get<PostseasonGame[]>(`/ncbca-reference-backend/getPostseasonGamesForTeam?season=${year}&teamName=${teamName}`);
  }

  
}
