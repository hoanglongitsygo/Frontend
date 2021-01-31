import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Thống kê kinh doanh', icon: 'pi pi-fw pi-chart-line', routerLink: ["chart"]},
          {label: 'Quản lý tài chính', icon: 'pi pi-fw pi-dollar', routerLink: ["cash"]},
          {label: 'Quản lý đơn hàng', icon: 'pi pi-fw pi-file', routerLink: ["orders"]},
          {label: 'Quản lý sản phẩm', icon: 'pi pi-fw pi-slack', routerLink: ["products"]},
          {label: 'Chăm sóc khách hàng', icon: 'pi pi-fw pi-comments', routerLink: ["customers"]},
          {label: 'Quản lý người dùng', icon: 'pi pi-fw pi-user-edit', routerLink: ["users"]},
      ];

      this.activeItem = this.items[0];
  }
}
