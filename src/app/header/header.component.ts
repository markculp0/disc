import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

import { Disc } from '../shared/disc';
import { DiscService } from '../services/disc.service';

import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';

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

  curDiscs: Disc[];
  curIds: string[];


  /**
   * **Desc:** Constructor for Header Component.
   *
   * ***
   * @param dialog Mat Dialog for Login Component.
   */
  constructor(public dialog: MatDialog,
              private router: Router,
              private authService: AuthService,
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
   * Logout method
   */
  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/home']);
  }


  /**
   * **Desc:** Method to open Login Component.
   */
  openLoginForm() {

    /** Open dialog. */
    this.dialog.open(LoginComponent, { width: '500px', height: '450px'});

  }

  /**
   * **Desc:** Method to determine if user is on a particular page or route.
   */
  hasRoute(route: string) {
    /** On specific page or route? */
    return this.router.url.includes(route);
  }

  downloadZip() {

    this.discService.currentDiscs
        .subscribe(cds => this.curDiscs = cds);

    // for (let i = 1; i < this.curDiscs.length; i++) {
    //   this.curIds[i] = this.curDiscs[i].id;
    // }

    // for (let i = 1; i < this.curIds.length; i++) {
    //   console.log(this.curIds[i]);
    // }

    
    const fld = 'ids';
    const obj = {};
    obj[fld] = Object.assign( [], this.curDiscs);
    const formData = JSON.stringify(obj);

    console.log(formData);

    // this.discService.export().subscribe(data => saveAs(data, `image.zip`));
  }


}
