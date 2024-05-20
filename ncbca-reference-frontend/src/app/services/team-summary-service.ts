import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSummary } from '../model/TeamSummary';

@Injectable({
  providedIn: 'root'
})
export class TeamSummaryService {
  
  constructor(private http: HttpClient) {}

  getTeamSummary(teamName: String): Observable<TeamSummary> {
    return this.http.get<TeamSummary>(`/ncbca-reference-backend/teamSummary?teamName=${teamName}`);
  }


  
}
