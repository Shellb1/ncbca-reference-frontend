import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoachSummary } from '../model/CoachSummary';
import { DraftPick } from '../model/DraftPick';


@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  
  constructor(private http: HttpClient) {}

  getCoachSummary(coach: string): Observable<CoachSummary> {
    return this.http.get<CoachSummary>(`/ncbca-reference-backend/coachSummary?coachName=${coach}`);
  }

  getAllTimeRecordVersusOtherCoaches(coach: string): Observable<Map<String, String>> {
    return this.http.get<Map<String, String>>(`/ncbca-reference-backend/allTimeRecordVersusOtherCoaches?coachName=${coach}`);
  }

  getDraftPicks(coach: string): Observable<DraftPick[]> {
    return this.http.get<DraftPick[]>(`/ncbca-reference-backend/getDraftPicks?coachName=${coach}`);
  }
  
}
