import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConferenceSummary } from '../model/ConferenceSummary';


@Injectable({
  providedIn: 'root'
})
export class ConferenceSummaryService {
  
  constructor(private http: HttpClient) {}

  getConferenceSummariesForYear(year: number): Observable<ConferenceSummary[]> {
    return this.http.get<ConferenceSummary[]>(`/ncbca-reference-backend/conferencesSummary?season=${year}`);
  }

}
