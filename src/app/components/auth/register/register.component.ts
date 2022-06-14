import { Component, OnInit } from '@angular/core';
import { NbAuthSocialLink } from '@nebular/auth';
import { NbLoginComponent,NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbLoginComponent{

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  socialLinks: NbAuthSocialLink[] = [];
  ngOnInit(): void {
  }

  register(){
    
  }

}
