import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArithmeticComponent } from './arithmetic.component';
import { ArithmeticRoutingModule } from './arithmetic-routing.module';

@NgModule({
  declarations: [ArithmeticComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ArithmeticRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArithmeticModule { }
