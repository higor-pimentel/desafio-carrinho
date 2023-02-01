import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartList, Product } from 'src/app/core/models';
import { CartService, ProductsService } from 'src/app/core/services';
import { products } from '../../mocks/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  show = false;
  cartList: CartList[] = [];
  cupom = 0;
  imageURL = '';
  productsCategory!: string | null;

  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productsCategory = params.get('category');
      this.getProducts();
    });
    this.cartList = this.cartService.cartList;
  }

  showCart() {
    this.show = !this.show;
  }

  switchImage(count: number) {
    if (count >= this.productsList.length) {
      count = 0;
    }

    this.imageURL = this.productsList[count].thumbnail;

    setTimeout(() => {
      this.switchImage(count + 1);
    }, 5000);
  }

  getProducts() {
    this.productsCategory
      ? this.productService
          .getAllProductsCategory(this.productsCategory)
          .subscribe((res) => {
            this.productsList = res.products;
            this.switchImage(0);
          })
      : this.productService.getAllProducts().subscribe((res) => {
          this.productsList = res.products;
          this.switchImage(0);
        });
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
    this.cupom = this.cartService.applyCupom(input);
  }
}
