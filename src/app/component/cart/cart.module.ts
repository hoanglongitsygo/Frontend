import { CartComponent } from './cart.component';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ButtonModule,
    DataViewModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class CartModule { }
