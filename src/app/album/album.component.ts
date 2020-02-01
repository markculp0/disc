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
  selectedDisc: Disc;

  // Current shared discs
  curDisc: Disc;
  curDiscs: Disc[];

  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {

    // // Get shared discs
    // this.discService.currentDiscs.subscribe(discs => this.curDiscs = discs);

    this.discService.getDiscs()
    .subscribe(discs => this.discs = discs);


  }

  // onSelect(disc: Disc) {
  //   this.selectedDisc = disc;
  // }

  selectDisc(selDisc: Disc) {

    // Get user selected disc
    this.selectedDisc = selDisc;

    // Alter shared discs
    this.discService.changeDisc(this.selectedDisc);
    this.discService.changeDiscs(this.discs);

    // Set local current discs
    this.curDisc = this.selectedDisc;
    this.curDiscs = this.discs;
  }

}

