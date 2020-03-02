import { Component, OnInit, Inject } from '@angular/core';

import { Disc } from '../shared/disc';

import { DiscService } from '../services/disc.service';

/**
 * Component provides Materials table listing all
 * albums returned from a user search.
 */
@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})

/**
 * Class displays one or more discs a user has
 * executed a search for in the Search Component.
 */
export class AlbumlistComponent implements OnInit {

  disc: Disc;
  discs: Disc[];
  selectedDisc: Disc;

  curDisc: Disc;
  curDiscs: Disc[];

  columnsToDisplay = [
    'id', 'title', 'artist'
  ];

  /**
   * **Description:** Injects discService and BaseURL.
   *
   * ***
   */
  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  /**
   * **Description:** Retrieves current discs from
   * discserviceusing the 'currentDiscs' property from
   * the discservice.  Sets discs:
   * discs.
   *
   * ***
   */
  ngOnInit() {
    /** Set discs using discservice currentDiscs property */
    this.discService.currentDiscs
      .subscribe(discs => this.discs = discs);
  }

  /**
   * **Description:** Method to set the discs to be displayed.
   * ***
   * @param disc Discs returned by user's search.
   */
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
