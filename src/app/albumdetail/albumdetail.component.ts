import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';
import { Disc } from '../shared/disc';
import { Song } from '../shared/song';
// import { DISCS } from '../shared/discs';

import { DiscService } from '../services/disc.service';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.scss']
})

export class AlbumdetailComponent implements OnInit {

  // discs: Disc[] = DISCS;
  // disc = DISCS[0];

  // @Input()
  disc: Disc;
  discIds: string[];
  song: Song;

  // shared discs
  curDisc: Disc;
  curDiscs: Disc[];

  constructor(private discservice: DiscService,
              private route: ActivatedRoute,
              private location: Location,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {

    // this.discservice.getDiscIds().subscribe(discIds => this.discIds = discIds);

    // this.route.params.pipe(switchMap((params: Params) => this.discservice.getDisc(params.id)))
    //   .subscribe(disc => this.disc = disc);

    // Get shared disc
    this.discservice.currentDisc.subscribe(disc => this.curDisc = disc);

  }

  goBack(): void {
    this.location.back();
  }

}
