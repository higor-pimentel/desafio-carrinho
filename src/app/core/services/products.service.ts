import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';
import { environment } from 'src/environments/environment';

interface ProdutcsResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

@Injectable()
export class ProductsService {
  url = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get<ProdutcsResponse>(this.url, {
      params: { limit: 10 },
    });
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(this.url.concat(`/${id}`));
  }

  searchProduct(searchTerm: string) {
    return this.httpClient.get<ProdutcsResponse>(
      this.url.concat(environment.search),
      { params: { q: searchTerm, limit: 10 } }
    );
  }

  getAllProductsCategory(category: string) {
    return this.httpClient.get<ProdutcsResponse>(
      this.url.concat(environment.category, `/${category}`),
      { params: { limit: 10 } }
    );
  }
}
