import { Component, OnInit, Input } from '@angular/core';
import { Disc } from '../shared/disc';
// import { DISCS } from '../shared/discs';

import { DiscService } from '../services/disc.service';
import { Params, ActivatedRoute } from '@angular/router';
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

  constructor(private discservice: DiscService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.disc = this.discservice.getDisc(id);
  }

  goBack(): void {
    this.location.back();
  }

}
