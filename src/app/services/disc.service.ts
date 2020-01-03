import { Injectable } from '@angular/core';

import { Disc } from '../shared/disc';
import { DISCS } from '../shared/discs';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  constructor() { }

  getDiscs(): Disc[] {
    return DISCS;
  }

}
