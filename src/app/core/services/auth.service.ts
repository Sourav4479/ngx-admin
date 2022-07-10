import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Amplify,Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
Amplify.configure({
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_1pJJS5li2',
    userPoolWebClientId: '36f95gk86cdgicv3sphgb01kt5',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private token:TokenService,private router:Router) { }

  login(username,password){
    //On successfull login Set JWT token to local Storage
    const obs  = new Observable(observer=>{
      Auth.signIn(username,password).then(data=>{
        this.token.setData(data)
        observer.next(data)
        observer.complete()
      }).catch(err=>{
        observer.error(err)
        observer.complete()
      })
    })
    return obs
  }

  logout()
  {
    Auth.signOut()
    this.token.clearTokens()
    this.router.navigate(['auth'])
  }

  isLoggedIn(){
    return this.token.isAuthenticated();
  }
  getAuthToken(){
    if(this.token.isAuthenticated()){
      return JSON.parse(localStorage.getItem('ID_TOKEN'))
    }else{
      return false
    }
  }

}
