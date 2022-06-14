import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { Amplify,Auth } from 'aws-amplify';
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
export class LoginComponent extends NbLoginComponent {
    user
    login(){
        console.log(this.user)
        this.signIn(this.user.email,this.user.password)
    }
    signIn(username,password) {
        Auth.signIn(username,password).then(data=>{
            console.log(data)
        })
    }
}