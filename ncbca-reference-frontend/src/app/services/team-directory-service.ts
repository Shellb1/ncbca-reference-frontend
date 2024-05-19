import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "../model/Team";

@Injectable({
  providedIn: 'root'
})
export class TeamDirectoryService {
  
  constructor(private http: HttpClient) {}

    getAllTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`/ncbca-reference-backend/allTeams`);
    }
}