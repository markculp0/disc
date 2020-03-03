import { Component, OnInit } from '@angular/core';

/**
 * Component to provide footer for each page
 * on the website.  Contains webpage links and
 * contact information along with social media
 * links.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** No constructor. */
  constructor() { }

  /** No on init.
   *
   * ***
   */
  ngOnInit() {
  }

}
