import { Component, OnInit } from '@angular/core';
import { Disc } from '../shared/disc';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  discs: Disc[] = [
    {
      id: '0',
      title: 'Surfacing',
      artist: 'Sarah McLauchlan',
      image: '/assets/images/surfacing.png',
      featured: true,
      description: 'A defining album for an incredible talent.'
    },
    {
      id: '1',
      title: 'Netherlands',
      artist: 'Dan Fogelberg',
      image: '/assets/images/netherlands.png',
      featured: false,
      description: 'One of Dan\'s best.  Introspective and profound.' 
    },
    {
      id: '2',
      title: 'X & Y',
      artist: 'Coldplay',
      image: '/assets/images/xAndY.png',
      featured: false,
      description: 'Hooked me for life.  Coldplay is hypnotic.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
