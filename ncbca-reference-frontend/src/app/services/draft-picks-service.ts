import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DraftPick } from '../model/DraftPick';


@Injectable({
  providedIn: 'root'
})
export class DraftPicksService {
  
  constructor(private http: HttpClient) {}

  getDraftPicks(season: number): Observable<DraftPick[]> {
    return this.http.get<DraftPick[]>(`/ncbca-reference-backend/getDraftPicksBySeason?season=${season}`);
  }
  
}