import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ToastModule } from 'primeng/toast';


const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ToastModule],
  exports: [RouterModule]
})
export class ProductDetailsModule { }
