import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  deleteProduct(product) {
    const index = this.cart.findIndex(prod => {
      return prod === product;
    });
    this.cart.splice(index, 1);
    this.cartService.setCartLocalStorage(this.cart);
  }

  totalPrice() {
    let totalPrice = 0;
    this.cart.forEach(element => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

}
