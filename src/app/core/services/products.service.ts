import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';

interface Response {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

@Injectable()
export class ProductsService {
  url = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<Response>(this.url, { params: { limit: 10 } });
  }
}
