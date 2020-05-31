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

  // Get Discs array over HTTP
  getDiscs(): Observable<Disc[]> {
    return this.http.get<Disc[]>(baseURL + 'discs');
  }

  // Get Disc by ID over HTTP
  getDisc(id: string): Observable<Disc> {
    return this.http.get<Disc>(baseURL + 'discs/' + id);
  }

  // Get Featured Disc over HTTP
  getFeaturedDisc(): Observable<Disc> {
    return this.http.get<Disc[]>(baseURL + 'disc?featured=true')
      .pipe(map(discs => discs[0]));
  }

  // Get Disc IDs over HTTP
  getDiscIds(): Observable<string[] | any> {
    return this.getDiscs()
      .pipe(map(discs => discs.map(disc => disc.id)));
  }

  // Post disc IDs
  postIdNumbers(ids: string): Observable<Disc[]> {
    return this.http.post<Disc[]>(baseURL + 'postID', ids);
  }

  // Get Image and download images
  // getDownloadZip(): Observable<Blob> {
  //   let url = `${baseURL}${'/image.zip'}`;
  //   var body = { filename: 'image.zip' };

  // }

  export() {
    return this.http.get(baseURL + 'image.zip',
        {responseType: 'blob'});
  }


  changeDisc(disc: Disc) {
    this.discSource.next(disc);
  }

  changeDiscs(discs: Disc[]) {
    this.discsSource.next(discs);
  }

}


