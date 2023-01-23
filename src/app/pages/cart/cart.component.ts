import { Component } from '@angular/core';
import { CartList } from 'src/app/core/models';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cupomValor: number = 0;
  cupom: string = '';
  freigth = 0;
  cartList: CartList[];

  constructor(private cartService: CartService) {
    this.cartList = this.cartService.cartList;
    this.cupomValor = this.cartService.applyCupom();
    this.cupom = this.cartService.cupom;
  }

  addProduct(product: any) {
    this.cartService.addProduct(product);
  }

  subProduct(product: any) {
    this.cartService.subProduct(product);
  }

  delProduct(product: any) {
    this.cartService.delProduct(product);
  }

  totalPrice() {
    return this.cartService.totalPrice();
  }

  applyCupom(input: any) {
    this.cupomValor = this.cartService.applyCupom(input);
  }

  applyFreigth(input: any) {
    this.freigth = Math.random() * 100;
  }
}
