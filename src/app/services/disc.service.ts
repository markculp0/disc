import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import { Disc } from '../shared/disc';
// import { DISCS } from '../shared/discs';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  // Shared discs
  private discSource = new BehaviorSubject<Disc>(new Disc());
  private discsSource = new BehaviorSubject<Disc[]>(new Array <Disc>());

  currentDisc = this.discSource.asObservable();
  currentDiscs = this.discsSource.asObservable();

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

  changeDisc(disc: Disc) {
    this.discSource.next(disc);
  }

  changeDiscs(discs: Disc[]) {
    this.discsSource.next(discs);
  }

}


