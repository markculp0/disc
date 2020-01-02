import { Component, OnInit } from '@angular/core';
import { Disc } from '../shared/disc';
import { DISCS } from '../shared/discs';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  discs: Disc[] = DISCS;
  // selectedDisc = DISCS[0];

  constructor() { }

  ngOnInit() {
  }

}
