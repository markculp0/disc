import { Routes } from '@angular/router';

import { AlbumComponent } from '../album/album.component';
import { AlbumdetailComponent } from '../albumdetail/albumdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'album',     component: AlbumComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

