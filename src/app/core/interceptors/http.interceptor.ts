import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LOCAL_STORAGE, STATUS_CODE } from '../constants/common.constant';
import { checkIsAuthenticated } from 'src/app/main/auth/state/auth.selector';
import { clearTokens } from '../utils/tokenUtils';
import { LOGOUT } from '../store/app.actions';
// import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private store: Store) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem(LOCAL_STORAGE.ID_TOKEN);
    // if (!isAuthenticated()) {
    //   return next.handle(req);
    // }
    // this.store.select(checkIsAuthenticated).subscribe(data=>{
     
    // })
    if(!idToken){
      return next.handle(req);
    }
    const authReq = this.addAuthorizationHeader(req, idToken);
    return next.handle(authReq).pipe(catchError(err => {
      if (err.status === STATUS_CODE.FORBIDDEN_STATUS_CODE || err.status === STATUS_CODE.UNAUTHORIZED_STATUS_CODE) {
        clearTokens();
        this.store.dispatch(LOGOUT())
        this.router.navigate(['auth/login']);
      } else {
        return throwError(err);
      }
    }));
  }

  addAuthorizationHeader(req: HttpRequest<any>, idToken: string) {
    return req.clone({
      setHeaders: {
        Authorization: idToken
      }
    });
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
];