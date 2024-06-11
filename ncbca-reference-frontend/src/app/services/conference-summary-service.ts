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

getConferenceSummaryForConference(conferenceName: string, season: number | null): Observable<ConferenceSummary> {
    let url = `/ncbca-reference-backend/conferenceSummary?conferenceName=${conferenceName}`;
    if (season !== undefined) {
        url += `&season=${season}`;
    }
    return this.http.get<ConferenceSummary>(url);
}

}
