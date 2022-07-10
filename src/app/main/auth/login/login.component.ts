import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {
   
    protected service: NbAuthService;
    protected cd: ChangeDetectorRef;
    protected router: Router;
    constructor(
      service: NbAuthService,
      @Inject(NB_AUTH_OPTIONS) protected options,
      cd: ChangeDetectorRef,
      router: Router,
      private http: HttpClient,
      private auth:AuthService
    ) {
      super(service, options, cd, router);
    }
    user
    login(){
        console.log(this.user)
        this.auth.login('admin.' + this.user.email, this.user.password).subscribe(data => {
            console.log('Auth Successfull!', data)
            this.router.navigate(['dashboard'])
        }, error => {
            console.log('Unable to login!', error)
        })
    }
   
}