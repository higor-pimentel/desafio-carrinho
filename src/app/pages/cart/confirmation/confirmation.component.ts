import { Component, OnDestroy } from '@angular/core';
import { CartList } from 'src/app/core/models';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnDestroy {
  cartList: CartList[];
  cupomValor: number;
  cupom: string;
  frete: number = 0;

  constructor(private cartService: CartService) {
    this.cartList = this.cartService.cartList;
    this.cupomValor = this.cartService.applyCupom();
    this.cupom = this.cartService.cupom;
  }

  totalPrice() {
    return this.cartService.totalPrice();
  }

  ngOnDestroy() {
    this.cartService.clear();
  }
}
