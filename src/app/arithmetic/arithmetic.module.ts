import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArithmeticComponent } from './arithmetic.component';
import { ArithmeticRoutingModule } from './arithmetic-routing.module';

@NgModule({
  declarations: [ArithmeticComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArithmeticRoutingModule
  ]
})
export class ArithmeticModule { }
