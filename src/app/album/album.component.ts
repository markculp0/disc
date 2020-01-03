import { Component, OnInit } from '@angular/core';

import { Disc } from '../shared/disc';
// import { DISCS } from '../shared/discs';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  // discs: Disc[] = DISCS;
  discs: Disc[];
  selectedDisc: Disc;

  constructor(private discService: DiscService) { }

  ngOnInit() {
    this.discs = this.discService.getDiscs();
  }

  onSelect(disc: Disc) {
    this.selectedDisc = disc;
  }

}

