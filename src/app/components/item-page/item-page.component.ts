import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, ProductListItem } from 'src/app/shared/models/products.model';
import { ProductsApiService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  public productId: string;
  public productsData$: Observable<ProductListItem>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
    });

    this.productsData$ = this.productService.getPharmacyItemById(
      this.productId
    );
   
  }
}
