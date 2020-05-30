import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { saveAs } from 'file-saver';


import { DiscService } from '../services/disc.service';

import { LoginComponent } from '../login/login.component';

/**
 * Component to provide header for each page
 * on the website.  Contains Materials Toolbar
 * with links to each page and Jumbotron with
 * main header and website logo.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * **Desc:** Constructor for Header Component.
   *
   * ***
   * @param dialog Mat Dialog for Login Component.
   */
  constructor(public dialog: MatDialog,
              private router: Router,
              private discService: DiscService,
              @Inject('BaseURL') public BaseURL
    ) { }

  /**
   * **Desc:** No on init.
   *
   * ***
   */
  ngOnInit() {
  }

  /**
   * **Desc:** Method to open Login Component.
   */
  openLoginForm() {

    /** Open dialog. */
    this.dialog.open(LoginComponent, { width: '500px', height: '450px'})

  }

  /**
   * **Desc:** Method to determine if user is on a particular page or route.
   */
  hasRoute(route: string) {

    /** On specific page or route? */
    return this.router.url.includes(route);
  }

  download() {
    this.discService.postDownloadImages(filename).subscribe(
      data => { saveAs(data, filename);
      });
  }

}
