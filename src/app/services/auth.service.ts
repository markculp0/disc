import { Injectable } from '@angular/core';

import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');
  }
}
