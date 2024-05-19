import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coach } from "../model/Coach";

@Injectable({
  providedIn: 'root'
})
export class CoachDirectoryService {
  
  constructor(private http: HttpClient) {}

    getAllCoaches(): Observable<Coach[]> {
        return this.http.get<Coach[]>(`/ncbca-reference-backend/allCoaches`);
    }
}