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

/** Display albums in two-column Materials gridlist */
export class AlbumComponent implements OnInit {

  /** AlbumComponent discs array */
  discs: Disc[];
  /** User selected disc */
  selectedDisc: Disc;

  /** Current shared disc */
  curDisc: Disc;
  /** Current shared discs array */
  curDiscs: Disc[];

  /**
   * Inject DiscService and BaseURL
   * - discService - To retrieve disc info from server
   * - BaseUrl - BaseURL string
   */
  constructor(private discService: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  /**
   * Calls getDiscs() method from dishService
   * to set the discs array; receives Observable
   * from http GET method
   */
  ngOnInit() {

    this.discService.getDiscs()
    .subscribe(discs => this.discs = discs);

  }

  /**
   *  Set the selected disc as the current local
   *  disc and current shared discs
   */
  selectDisc(selDisc: Disc) {

    /** Get user selected disc */
    this.selectedDisc = selDisc;

    /** Alter shared selected disc */
    this.discService.changeDisc(this.selectedDisc);
    /** Alter shared discs array */
    this.discService.changeDiscs(this.discs);

    /** Set local current selected disc */
    this.curDisc = this.selectedDisc;
    /** Set local current discs array */
    this.curDiscs = this.discs;
  }

}

