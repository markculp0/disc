import { Component, OnInit, Inject } from '@angular/core';

import { Disc } from '../shared/disc';
import { DiscService } from '../services/disc.service';

/**
 * Component displays four album images at a time
 * in a Materials gridlist.  Selecting each image
 * takes the user to the Albumdetail Component for
 * additional details.
 */
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  /** **Comment:** AlbumComponent discs array */
  discs: Disc[];
  /** **Comment:** User selected disc */
  selectedDisc: Disc;

  /**
   * **Description:** Inject DiscService and BaseURL
   * - discService - To retrieve disc info from server
   * - BaseUrl - BaseURL string
   *
   * ***
   */
  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  /**
   * **Description:** Calls getDiscs() method from
   * dishService to set the discs array; receives Observable
   * from http GET method
   *
   * ***
   */
  ngOnInit() {

    this.discService.getDiscs()
    .subscribe(discs => this.discs = discs);

  }

  /**
   *  **Description:** Set the currently selected local disc,
   *  shared disc, and shared discs array.
   *
   * ***
   */
  selectDisc(selDisc: Disc) {

    /** Get user selected disc */
    this.selectedDisc = selDisc;

    /** Alter shared selected disc */
    this.discService.changeDisc(this.selectedDisc);

    /** Alter shared discs array */
    this.discService.changeDiscs(this.discs);

  }

}

