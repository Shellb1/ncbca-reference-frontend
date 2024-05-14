import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSummary } from '../model/TeamSummary';
import { PostseasonGame } from '../model/PostseasonGame';

@Injectable({
  providedIn: 'root'
})
export class TeamSummaryService {
  
  constructor(private http: HttpClient) {}

  getTeamSummary(teamName: String, year: Number): Observable<TeamSummary> {
    return this.http.get<TeamSummary>(`/ncbca-reference-backend/teamSummary?teamName=${teamName}&year=${year}`);
  }

  getPostseasonGames(year: Number, teamName: String): Observable<PostseasonGame[]> {
    return this.http.get<PostseasonGame[]>(`/ncbca-reference-backend/getPostseasonGamesForTeam?season=${year}&teamName=${teamName}`);
  }
  
}
