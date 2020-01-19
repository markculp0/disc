import { Component, OnInit, Inject } from '@angular/core';

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
  // selectedDisc: Disc;

  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.discService.getDiscs()
      .subscribe(discs => this.discs = discs);
  }

  // onSelect(disc: Disc) {
  //   this.selectedDisc = disc;
  // }

}

