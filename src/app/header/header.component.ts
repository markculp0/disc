import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

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
  constructor(public dialog: MatDialog) { }

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

  };

}
