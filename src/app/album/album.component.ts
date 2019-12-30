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
      year: '1997',
      image: '/assets/images/surfacing.png',
      featured: true,
      description: 'A defining album for an incredible talent.'
    },
    {
      id: '1',
      title: 'Netherlands',
      artist: 'Dan Fogelberg',
      year: '1977',
      image: '/assets/images/netherlands.png',
      featured: false,
      description: 'One of Dan\'s best.  Introspective and emotional.'
    },
    {
      id: '2',
      title: 'X & Y',
      artist: 'Coldplay',
      year: '2005',
      image: '/assets/images/xAndY.png',
      featured: false,
      description: 'Coldplay is hypnotic.  This is one of their best.'
    },
    {
      id: '3',
      title: 'Eldorado',
      artist: 'Electric Light Orchestra',
      year: '1974',
      image: '/assets/images/eldorado.png',
      featured: false,
      description: 'I had never heard anything like this before.  ELO\'s most serious work.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
