import { Routes } from '@angular/router';

import { AlbumComponent } from '../album/album.component';
import { AlbumdetailComponent } from '../albumdetail/albumdetail.component';
import { AlbumlistComponent } from '../albumlist/albumlist.component';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { ContactComponent } from '../contact/contact.component';
import { AuthGuard } from '../guards/auth.guard';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent},
    { path: 'album', component: AlbumComponent, canActivate: [AuthGuard] },
    { path: 'albumdetail/:id', component: AlbumdetailComponent, canActivate: [AuthGuard]},
    { path: 'albumlist', component: AlbumlistComponent, canActivate: [AuthGuard]},
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
    { path: 'contactus', component: ContactComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


