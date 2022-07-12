import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/main/auth/state/auth.state';
import { checkIsAuthenticated } from 'src/app/main/auth/state/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isActivated = false;
    this.store.select(checkIsAuthenticated).subscribe(data=>{
      isActivated = data;
    })
    if (isActivated) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthPageGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isActivated = false;
    this.store.select(checkIsAuthenticated).subscribe(data=>{
      isActivated = data;
    })
    if (!isActivated) {
      return true;
    }
    this.router.navigate(['/dashboard']);
    return false;
  }
}