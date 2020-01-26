import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Disc } from '../shared/disc';
// import { DISCS } from '../shared/discs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  constructor(private http: HttpClient) { }

  getDiscs(): Observable<Disc[]> {
    return this.http.get<Disc[]>(baseURL + 'discs');
  }

  getDisc(id: string): Observable<Disc> {
    return this.http.get<Disc>(baseURL + 'discs/' + id);
  }

  getFeaturedDisc(): Observable<Disc> {
    return this.http.get<Disc[]>(baseURL + 'disc?featured=true')
      .pipe(map(discs => discs[0]));
  }

  getDiscIds(): Observable<string[] | any> {
    return this.getDiscs()
      .pipe(map(discs => discs.map(disc => disc.id)));
  }

}


