import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TwoDimensionalShapesRoutingModule } from './two-dimensional-shapes-routing.module';
import { TwoDimensionalShapesComponent } from './two-dimensional-shapes.component';
@NgModule({
  declarations: [TwoDimensionalShapesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoDimensionalShapesRoutingModule
  ]
})
export class TwoDimensionalShapesModule { }