import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Season } from '../model/Season';

@Injectable({
  providedIn: 'root'
})
export class SeasonsServiceService {
  
  constructor(private http: HttpClient) {}

  getSeasonsMatchingYear(year: number): Observable<Season[]> {
    return this.http.get<Season[]>(`/ncbca-reference-backend/listSeasons?year=${year}`);
  }
  
}
