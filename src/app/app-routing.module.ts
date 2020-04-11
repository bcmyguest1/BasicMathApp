import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'BasicArithmetic',
    pathMatch: 'full'
  },
  {
    path: 'Graphing',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule),
  },
  {
    path: 'BasicArithmetic',
    loadChildren: () => import('./arithmetic/arithmetic.module').then( m => m.ArithmeticModule)
  },
  {
    path: 'Shapes2D',
    loadChildren: () => import('./two-dimensional-shapes/two-dimensional-shapes.module').then(m => m.TwoDimensionalShapesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
