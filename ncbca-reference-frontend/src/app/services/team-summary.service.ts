import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSummary } from '../model/TeamSummary';
import { Game } from '../model/Game';
import { NitGame } from '../model/NitGame';

@Injectable({
  providedIn: 'root'
})
export class TeamSummaryService {
  
  constructor(private http: HttpClient) {}

  getTeamSummary(teamName: String, year: Number): Observable<TeamSummary> {
    return this.http.get<TeamSummary>(`/ncbca-reference-backend/teamSummary?teamName=${teamName}&year=${year}`);
  }

  getNitGames(year: Number): Observable<NitGame[]> {
    return this.http.get<NitGame[]>(`/ncbca-reference-backend/getNitTeamsForSeason?season=${year}`);
  }
  
}
