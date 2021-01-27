import { CartComponent } from './cart.component';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ButtonModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class CartModule { }
