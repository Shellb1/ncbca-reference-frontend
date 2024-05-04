import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSummary } from '../model/TeamSummary';
import {  NtGame } from '../model/NtGame';
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
    return this.http.get<NitGame[]>(`/ncbca-reference-backend/getNitGamesForSeason?season=${year}`);
  }
    
  getNtGames(year: Number): Observable<NtGame[]> {
    return this.http.get<NtGame[]>(`/ncbca-reference-backend/getNtGamesForSeason?season=${year}`);
  }

}
