import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { MENU_ITEMS } from '../core/constants/menu.items';
import { AUTO_LOGIN } from './auth/state/auth.actions';
import { checkIsAuthenticated } from './auth/state/auth.selector';
import { AuthState } from './auth/state/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecom-admin';

    items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];

  isSidebarExpanded = true
  menu= MENU_ITEMS;

  constructor(private store: Store,private router: Router,private sidebarService: NbSidebarService){}
  isAuthenticated = false
  isLoading= false
  ngOnInit(){
    // this.isLoading = true
    // this.router.navigate(['auth/login']).then(()=>{ // Forcing router to lazy load auth module
      
      
    // })
   
    this.store.dispatch(AUTO_LOGIN())
        // this.store.select(checkIsAuthenticated).subscribe(data=>{
        //   this.isAuthenticated = data
          
        //   if(!this.isAuthenticated){
        //     this.router.navigate(['dashboard']) 
        //     this.isLoading=false
        //   }
          
        // })

  }
  // toggle() {
  //   // this.sidebarService.toggle(true);
  //  if(this.isSidebarExpanded){
  //   this.isSidebarExpanded = false
  //   this.sidebarService.toggle(true)
  //  }else{
  //   this.isSidebarExpanded = true
  //   this.sidebarService.toggle(true)
  //  }
  //   return false;
  // }

}
