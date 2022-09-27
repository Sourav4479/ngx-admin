import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HSNComponent } from './hsn/hsn.component';
import { HomeComponent } from './home/home.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



export const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'home',component: HomeComponent},
      {path: 'hsn',component: HSNComponent, loadChildren: () => import('./hsn/hsn.module').then(m => m.HSNModule)},
      {path: 'product', loadChildren: () => import('./schools/schools.module').then(m => m.SchoolsModule)},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home' },
    ]
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NbCardModule,
    NbMenuModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NbButtonModule
  ]
})
export class DashboardModule { }
