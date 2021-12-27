import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import {
  fullProductMapperIn,
  productMapperIn,
} from '../mappers/product.mapper';
import {
  Product,
  ProductEntities,
  ProductEntity,
  ProductListItem,
} from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private baseProductsUrl = `${environment.apiUrl}products`;

  constructor(private httpClient: HttpClient) {}

  public getPharmacyItems(): Observable<Product[]> {
    return this.httpClient.get<ProductEntities>(this.baseProductsUrl).pipe(
      map((products) => {
        return products.data.map((product) => {
          return productMapperIn(product);
        });
      })
    );
  }

  public getPharmacyItemById(id: string): Observable<ProductListItem> {
    return this.httpClient
      .get<ProductEntity>(`${this.baseProductsUrl}/${id}`)
      .pipe(
        map((product) => {
          return fullProductMapperIn(product);
        })
      );
  }
}
