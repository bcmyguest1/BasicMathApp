import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoDimensionalShapesComponent } from './two-dimensional-shapes.component';

const routes: Routes = [
  {
    path: '',
    component: TwoDimensionalShapesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoDimensionalShapesRoutingModule {}
