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

  getDisc(id: string): Disc {
    return DISCS.filter((disc) =>
      (disc.id === id))[0];
  }

  getFeaturedDisc(): Disc {
    return DISCS.filter((disc) =>
      disc.featured)[0];
  }
}


