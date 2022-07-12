import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HSNComponent } from './hsn.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ViewHsnComponent } from './view-hsn/view-hsn.component';




@NgModule({
  declarations: [HSNComponent, ViewHsnComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class HSNModule { }
