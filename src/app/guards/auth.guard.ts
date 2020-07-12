import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    //** User authenticated  */
    if (this.isLoggedIn()) {
      return true;
    }
    //** User not authenticated */
    this.router.navigate(['/home']);
    return false;
  }

  //** Check session storage: login status */
  public isLoggedIn(): boolean {

    //** Return value */
    let status = false;

    //** Check session storage value */
    if (sessionStorage.getItem('isLoggedIn') == "true") {
      status = true;
    } else {
      status = false;
    }    

    return status;
  }
  
}
