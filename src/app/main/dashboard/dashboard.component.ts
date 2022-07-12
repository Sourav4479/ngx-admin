import { Component, OnInit } from '@angular/core';

import { FOOTER_MENU_ITEMS, MENU_ITEMS } from 'src/app/core/constants/menu.items';


@Component({
  selector: 'app-dashboard',
  template: `
    <app-dasboard-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-dasboard-layout>
  `
})
export class DashboardComponent {
  
  menu= MENU_ITEMS;
  footerMenu = FOOTER_MENU_ITEMS
  constructor() {

  }
}
