import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) { }

  isLogin() {
    return localStorage.getItem('asset_token');
  }

  login(data: any): Observable<any> {
      return this.http.post<any>(this.url + '/login', data);
  }
}
