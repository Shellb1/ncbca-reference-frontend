import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSeasonSummary } from '../model/TeamSeasonSummary';

@Injectable({
  providedIn: 'root'
})
export class TeamSeasonSummaryService {
  
  constructor(private http: HttpClient) {}

  getTeamSeasonSummary(teamName: String, year: Number): Observable<TeamSeasonSummary> {
    return this.http.get<TeamSeasonSummary>(`/ncbca-reference-backend/teamSeasonSummary?teamName=${teamName}&year=${year}`);
  }
}
