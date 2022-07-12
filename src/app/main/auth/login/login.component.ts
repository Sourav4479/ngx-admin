import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { Amplify,Auth } from 'aws-amplify';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../state/auth.state';
import { LOGIN_START } from '../state/auth.actions';
import { apiCallCheckCounter, checkForError } from '../state/auth.selector';
Amplify.configure({
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_yFqCbDLP3',
    userPoolWebClientId: 'imq06q5pm4ga3g35ve8030f72',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
})

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent implements OnInit {
    user
    isLoading = false;
    errorMessage = null
    constructor(private authService: AuthService,private store: Store<AuthState>, service: NbAuthService,
      @Inject(NB_AUTH_OPTIONS) options: {},
      cd: ChangeDetectorRef, router: Router) {
      super(service, options, cd, router);
    }

    ngOnInit(){
        this.getDataFromStore()
    }
    getDataFromStore(){
      this.store.select(apiCallCheckCounter).subscribe(data=>{
       if(data==0){
          this.isLoading= false
        }else{
          this.isLoading = true
        }
      })
      this.store.select(checkForError).subscribe(data=>{
        this.errorMessage = data == null ? '' : data 
      })
    }

    login() {
      let body = {
        userName: this.user.email,
        password: this.user.password
      }
    this.store.dispatch(LOGIN_START({form : body}));
    }
  
}