import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { AuthService } from "src/app/core/services/auth/auth.service";

import { mergeMap, map, exhaustMap, catchError, switchMap, take } from "rxjs/operators";
import { from, of } from "rxjs";
import { AuthState } from "./auth.state";
import { AUTO_LOGIN, COGNITO_SIGNIN, DECREMENT_API_CALL_COUNTER, INCREMENT_API_CALL_COUNTER, LOGIN_START, LOGIN_SUCCESS, SET_ERROR_STATUS } from "./auth.actions";
import { getUserDataFromLocalStorage } from "src/app/core/utils/tokenUtils";
import { NbToastrService } from "@nebular/theme";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store:Store<AuthState>, 
    private authService: AuthService,
    private router: Router,
    private toast:NbToastrService
    ){}

  loginStart$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(LOGIN_START),
      switchMap((action)=>{
        this.store.dispatch(INCREMENT_API_CALL_COUNTER())
        return  this.authService.login(action.form).pipe(
          map((userData:any)=>{
            this.toast.success('Login Successful!','Success')
            this.router.navigate(['/home']);
            this.store.dispatch(DECREMENT_API_CALL_COUNTER());
            // this.toastService.handleSuccess(SUCCESS_MESSAGES.SIGNIN_SUCCESS)
            return LOGIN_SUCCESS({data: userData}); 
          }),catchError(err=>{
            let errData = this.handleLoginException(err);
            this.store.dispatch(DECREMENT_API_CALL_COUNTER())
            this.store.dispatch(SET_ERROR_STATUS({ errorMessage: errData.errorMessage }));
            this.toast.danger(errData.errorMessage,'Oops!')
            return of({type: 'Login Error',payload:{err}})
          })
        )
      })
    )
  })  

  // autoLogin$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AUTO_LOGIN),
  //     map((action) => {
  //       const user = getUserDataFromLocalStorage();
  //       console.log(user,'SOURAV')
  //       if(user){
  //          return LOGIN_SUCCESS({data:user})
  //       }
  //       return of({type: 'Login Error'})
  //     })
  //   );
  // });

  handleLoginException(err) {
    return({errorMessage: err.error.error.message});  
  }
}


