import { CartService } from './../../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { data as product } from '../../../../assets/data/product.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  providers: [MessageService]
})
export class CollectionComponent implements OnInit {
  products = product;

  sortKey = "";

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(
    private messageService: MessageService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Giá CAO đến THẤP', value: '!price' },
      { label: 'Giá THẤP đến CAO', value: 'price' }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addCart(item) {
    const listProduct = JSON.parse(localStorage.getItem('cart')) || [];
    listProduct.push(item)
    localStorage.setItem('cart', JSON.stringify(listProduct));
    this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Bạn đã thêm sản phẩm vào giỏ hàng!' });
    this.cartService.setCartLocalStorage(listProduct);
  }

  viewDetails(id) {
    this.router.navigate([`/product-details/${id}`]);
  }
}
