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

  /** **Desc:** Local disc. */
  disc: Disc;

  /** **Desc:** Local disc array. */
  discs: Disc[];

  /** **Desc:** Local selected disc */
  selectedDisc: Disc;

  /** **Desc:** Array of columns to display in Mat table. */
  columnsToDisplay = [
    'id', 'title', 'artist'
  ];

  /**
   * **Description:** Inject discService and BaseURL.
   *
   * ***
   */
  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  /**
   * **Description:** Retrieves current discs from
   * discserviceusing the 'currentDiscs' property from
   * the discservice.  Sets local discs array.
   *
   * ***
   */
  ngOnInit() {
    /** Set discs using discservice currentDiscs property */
    this.discService.currentDiscs
      .subscribe(discs => this.discs = discs);
  }

  /**
   * **Description:** Set the user-selected discs.
   * ***
   * @param disc Discs returned by user's search.
   */
  selectDisc(disc: Disc) {

    /** **Desc:** Set user selected disc */
    this.selectedDisc = disc;

    /** **Desc:** Update shared disc */
    this.discService.changeDisc(this.selectedDisc);

    /** **Desc:** Update shared discs array */
    this.discService.changeDiscs(this.discs);

  }

}
