import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardLayoutComponent } from './dasboard-layout/dasboard-layout.component';
import { NbActionsModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './component/header/header.component';




@NgModule({
  declarations: [
    DasboardLayoutComponent,
    HeaderComponent
  ],
  exports:[
    DasboardLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbUserModule,
    NbActionsModule,
    NbSidebarModule,
    NbIconModule,
    NbEvaIconsModule,
  ]
})
export class SharedModule { }
