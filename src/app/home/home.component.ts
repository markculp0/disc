import { Component, OnInit, Inject } from '@angular/core';
import { Disc } from '../shared/disc';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  disc: Disc;

  constructor(private discservice: DiscService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
    this.discservice.getFeaturedDisc()
      .subscribe(disc => this.disc = disc);
  }

}
