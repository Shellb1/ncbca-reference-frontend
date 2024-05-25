import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllTimeProgramRanking } from "../model/AllTimeProgramRanking";

@Injectable({
  providedIn: 'root'
})
export class AllTimeProgramsService {
  
  constructor(private http: HttpClient) {}

    getAllTimeProgramRankings(): Observable<AllTimeProgramRanking[]> {
        return this.http.get<AllTimeProgramRanking[]>(`/ncbca-reference-backend/allTimeProgramRankings`);
    }
}