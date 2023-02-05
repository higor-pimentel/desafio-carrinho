import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { CartList, Product } from 'src/app/core/models';
import { CartService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private productId!: string;
  product!: Product;
  cartProduct!: CartList;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') as string;
    this.cartProduct = this.cartService.cartList.find(
      (product) => product.product.id === Number(this.productId)
    ) as CartList;
    this.productService.getProduct(this.productId).subscribe((product) => {
      this.product = product;

      setTimeout(() => {
        this.spinner.hide();
      }, 200);
    });
  }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
    this.cartProduct = this.cartService.getCartProduct(
      this.productId
    ) as CartList;
  }

  subProduct(product: Product) {
    this.cartService.subProduct(product);
    this.cartProduct = this.cartService.getCartProduct(
      this.productId
    ) as CartList;
  }

  delProduct(product: Product) {
    this.cartService.delProduct(product);
    this.cartProduct = this.cartService.getCartProduct(
      this.productId
    ) as CartList;
  }
}
