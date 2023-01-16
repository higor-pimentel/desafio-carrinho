import { Component } from '@angular/core';
import { products } from '../../mocks/products';

interface CartList {
  units: number;
  product: any;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productsList: any[];
  show = false;
  cartList: CartList[] = [];
  cupom = 0;

  constructor() {
    this.productsList = products;
  }

  showCart() {
    this.show = !this.show;
  }

  addProduct(product: any) {
    let cartIndex = 0;
    if (
      this.cartList.some((cartProduct, index) => {
        cartIndex = index;
        return cartProduct.product.id === product.id;
      })
    ) {
      this.cartList[cartIndex].units++;
    } else {
      this.cartList.push({ product, units: 1 });
    }
  }

  subProduct(product: any) {
    let cartIndex = 0;
    if (
      this.cartList.some((cartProduct, index) => {
        cartIndex = index;
        return cartProduct.product.id === product.id;
      })
    ) {
      this.cartList[cartIndex].units--;
      if (!this.cartList[cartIndex].units) {
        this.cartList.splice(cartIndex, 1);
      }
    }
  }

  delProduct(product: any) {
    let cartIndex = 0;

    this.cartList.some((cartProduct, index) => {
      cartIndex = index;
      return cartProduct.product.id === product.id;
    });

    this.cartList.splice(cartIndex, 1);
  }

  totalPrice() {
    let total = 0;
    this.cartList.forEach((item) => {
      total = total + item.units * item.product.price;
    });

    return total;
  }

  applyCupom(input: any) {
    this.cupom = Number(input) / 100;
  }
}
