import { UsersComponent } from './users/users.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { CashComponent } from './cash/cash.component';
import { ChartComponent } from './chart/chart.component';
import { AdminComponent } from './admin.component';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { TabMenuModule } from 'primeng/tabmenu';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'chart', component: ChartComponent },
      { path: 'cash', component: CashComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'products', component: ProductComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'users', component: UsersComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ButtonModule,
    MatIconModule,
    TabMenuModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AdminModule { }
