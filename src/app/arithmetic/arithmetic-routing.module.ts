import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArithmeticComponent } from './arithmetic.component';

const routes: Routes = [
  {
    path: '',
    component: ArithmeticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArithmeticRoutingModule {}
