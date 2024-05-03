import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from '../model/Season';
import { CoachSummary } from '../model/CoachSummary';


@Injectable({
  providedIn: 'root'
})
export class CoachesService {
  
  constructor(private http: HttpClient) {}

  getCoachSummary(coach: string): Observable<CoachSummary> {
    return this.http.get<CoachSummary>(`/ncbca-reference-backend/coachSummary?coach=${coach}`);
  }
  
}
