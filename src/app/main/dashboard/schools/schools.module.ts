import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsCreateComponent } from './schools-create/schools-create.component';
import {  SchoolsComponent } from './schools.component';
import { RouterModule, Routes } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { FilePickerModule } from 'ngx-awesome-uploader';


export const routes: Routes = [
  {
    path:'',children:[
      {path:'list',component:SchoolsComponent},
      {path:'create',component:SchoolsCreateComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  declarations: [
    SchoolsCreateComponent,
    SchoolsComponent
  ],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FilePickerModule
  ]
})
export class SchoolsModule { }
