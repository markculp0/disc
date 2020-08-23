import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import {HttpParams} from '@angular/common/http';

import { authURL } from '../shared/authurl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /** Logout method reset session storage */
  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');
  }

  /** Post username password */
  postCred(usr: string): Observable<string> {    
    return this.http.post<string>(authURL, usr, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


} // end AuthService class
