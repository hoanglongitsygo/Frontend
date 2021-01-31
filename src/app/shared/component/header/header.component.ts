import { CartService } from './../../../core/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() active;
  currentUser;
  cart;
  favorite;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((status) => {
      this.cart = this.cartService.getCartLocalStorage;
     })
    this.currentUser = this.authenticationService.currentUserValue;
    //this.cart = this.cartService.getCartLocalStorage;//JSON.parse(localStorage.getItem('cart'));
    this.favorite = JSON.parse(localStorage.getItem('favorite'));
  }

  getName() {
    if(this.currentUser?.username) {
      return this.currentUser.username.substr(0,1).toUpperCase();
    } else {
      return 'G';
    }
  }

  onClickCart() {
    this.router.navigate(["cart"]);
  }

  onClickFavorite() {
    this.router.navigate(["favorite"]);
  }

  onClickConfig() {
    this.router.navigate(["admin"]);
  }

  onClickUser() {
    this.router.navigate(["login"]);
  }

}
