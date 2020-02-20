import { Routes } from '@angular/router';

import { AlbumComponent } from '../album/album.component';
import { AlbumdetailComponent } from '../albumdetail/albumdetail.component';
import { AlbumlistComponent } from '../albumlist/albumlist.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'albumdetail/:id', component: AlbumdetailComponent},
    { path: 'albumlist', component: AlbumlistComponent},
    { path: 'search', component: SearchComponent},
    { path: 'contactus', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


