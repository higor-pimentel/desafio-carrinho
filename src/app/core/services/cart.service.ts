import { Injectable, OnInit } from '@angular/core';
import { CartList } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
  _cartList: CartList[];
  descontos = new Map();
  cupom: string = '';

  constructor() {
    this._cartList = this.cartList;
    this.cupom = localStorage.getItem('cupom') as string;
  }

  get cartList(): Array<CartList> {
    let cart = localStorage.getItem('cartList');

    return cart
      ? (this._cartList = JSON.parse(cart))
      : (this._cartList = new Array<CartList>());
  }

  addProduct(product: any) {
    let cartIndex = 0;
    if (
      this._cartList.some((cartProduct, index) => {
        cartIndex = index;
        return cartProduct.product.id === product.id;
      })
    ) {
      this._cartList[cartIndex].units++;
    } else {
      this._cartList.push({ product, units: 1 });
    }

    localStorage.setItem('cartList', JSON.stringify(this._cartList));
  }

  subProduct(product: any) {
    let cartIndex = 0;
    if (
      this._cartList.some((cartProduct, index) => {
        cartIndex = index;
        return cartProduct.product.id === product.id;
      })
    ) {
      this._cartList[cartIndex].units--;
      if (!this._cartList[cartIndex].units) {
        this._cartList.splice(cartIndex, 1);
      }
    }

    localStorage.setItem('cartList', JSON.stringify(this._cartList));
  }

  delProduct(product: any) {
    let cartIndex = 0;

    this._cartList.some((cartProduct, index) => {
      cartIndex = index;
      return cartProduct.product.id === product.id;
    });

    this._cartList.splice(cartIndex, 1);
    localStorage.setItem('cartList', JSON.stringify(this._cartList));
  }

  totalPrice() {
    let total = 0;
    this._cartList.forEach((item) => {
      total = total + item.units * item.product.price;
    });

    return total;
  }

  applyCupom(input: string = this.cupom) {
    this.cupom = input;
    localStorage.setItem('cupom', this.cupom);

    if (!this.descontos.size) {
      for (let index = 10; index < 100; index = index + 10) {
        this.descontos.set(`DESCONTO${index}`, index);
      }
    }

    let desconto = this.descontos.get(input);
    return desconto ? desconto / 100 : 0;
  }

  clear() {
    localStorage.removeItem('cupom');
    localStorage.removeItem('cartList');
  }

  getCartProduct(id: string) {
    let cartProduct = this.cartList.find(
      (product) => product.product.id === Number(id)
    );

    return cartProduct;
  }
}
