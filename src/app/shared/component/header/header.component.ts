import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() active;
  cart;
  favorite;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.favorite = JSON.parse(localStorage.getItem('favorite'));
  }

  onClickCart() {
    this.router.navigate(["cart"]);
  }

  onClickFavorite() {
    this.router.navigate(["cart"]);
  }

  onClickUser() {
    this.router.navigate(["login"]);
  }

}
