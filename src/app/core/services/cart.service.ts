import { environment, endpoint } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CartService {
    private cartSubject: BehaviorSubject<any>;
    public cart: Observable<any>;

    constructor(private http: HttpClient) {
        this.cartSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('cart')));
        this.cart = this.cartSubject.asObservable();
    }

    public get getCartLocalStorage(): any {
        return this.cartSubject.value;
    }

    public setCartLocalStorage(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartSubject.next(cart);
    }
}
