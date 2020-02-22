import { Component, OnInit, Inject } from '@angular/core';

import { Disc } from '../shared/disc';

import { DiscService } from '../services/disc.service';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})
export class AlbumlistComponent implements OnInit {

  disc: Disc;
  discs: Disc[];
  selectedDisc: Disc;

  curDisc: Disc;
  curDiscs: Disc[];

  columnsToDisplay = [
    'id', 'title', 'artist'
  ];

  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    // Shared discs
    this.discService.currentDiscs
      .subscribe(discs => this.discs = discs);
  }


  selectDisc(disc: Disc) {

    // User selected disc
    this.selectedDisc = disc;

    // Alter shared disc
    this.discService.changeDisc(this.selectedDisc);
    this.discService.changeDiscs(this.discs);

    // Set local current disc
    this.curDisc = this.selectedDisc;
    this.curDiscs = this.discs;

  }

}
