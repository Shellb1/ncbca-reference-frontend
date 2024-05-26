import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllTimeCoachRanking } from "../model/AllTimeCoachRanking";

@Injectable({
  providedIn: 'root'
})
export class AllTimeCoachesService {
  
  constructor(private http: HttpClient) {}

    getAllTimeCoachRankings(): Observable<AllTimeCoachRanking[]> {
        return this.http.get<AllTimeCoachRanking[]>(`/ncbca-reference-backend/allTimeCoachRankings`);
    }
}