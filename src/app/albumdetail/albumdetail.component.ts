import { Component, OnInit, Input } from '@angular/core';
import { Disc } from '../shared/disc';
// import { DISCS } from '../shared/discs';

@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.scss']
})
export class AlbumdetailComponent implements OnInit {

  // discs: Disc[] = DISCS;
  // disc = DISCS[0];

  @Input()
  disc: Disc;

  constructor() { }

  ngOnInit() {
  }

}
