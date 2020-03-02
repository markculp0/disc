import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { Disc } from '../shared/disc';
import { Song } from '../shared/song';

import { DiscService } from '../services/disc.service';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';


/**
 * Component displays individual album details.  An
 * image of the album is displayed in a Materials card.
 * A list of the songs is displayed in a Materials list.
 */
@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.scss']
})

/**
 * Display album image in Materials card and
 * album details in Materials list.
 */
export class AlbumdetailComponent implements OnInit {

  /** AlbumdetailComponent local disc */
  disc: Disc;
  /** AlbumdetailComponent discIds */
  discIds: string[];
  /** AlbumdetailComponent song */
  song: Song;

  /** Current shared disc */
  curDisc: Disc;
  /** Current shared discs array */
  curDiscs: Disc[];

  /**
   * Inject DiscService, ActivatedRoute, Location and BaseURL
   * - discService - To retrieve current selected disc.
   * - route - Not used.
   * - location - For page back traversal.
   * - BaseUrl - BaseURL string.
   */
  constructor(private discservice: DiscService,
              private route: ActivatedRoute,
              private location: Location,
              @Inject('BaseURL') public BaseURL) { }

  /**
   * Retrieves current disc from discservice
   * using the 'currentDisc' property from
   * the discservice.  Sets current shared disc:
   * curDisc.
   */
  ngOnInit() {

    // this.discservice.getDiscIds().subscribe(discIds => this.discIds = discIds);

    // this.route.params.pipe(switchMap((params: Params) => this.discservice.getDisc(params.id)))
    //   .subscribe(disc => this.disc = disc);

    /** Set curDisc using discservice currentDisc property */
    this.discservice.currentDisc.subscribe(disc => this.curDisc = disc);

  }

  /** Page back in history */
  goBack(): void {
    this.location.back();
  }

}
