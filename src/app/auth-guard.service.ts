import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuardService implements CanActivate, CanActivateChild {

  // true or false to demo route guard
  private hasAccess = false;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('checking auth guard');
    if (!this.hasAccess) {
      this.router.navigate(['denied']);
    }
    return of(this.hasAccess);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('checking auth guard children');
    if (!this.hasAccess) {
      this.router.navigate(['denied']);
    }
    return of(this.hasAccess);
  }
}
