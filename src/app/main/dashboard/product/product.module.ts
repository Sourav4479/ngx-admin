import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';


export const routes: Routes = [
  {
    path:'',children:[
      {path:'list',component:ProductComponent},
      {path:'create',component:ProductCreateComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductComponent
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
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
