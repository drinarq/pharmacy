import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  public selectCountControl = new FormControl(0);
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      const cartData = window.localStorage.getItem('cart')
        ? JSON.parse(window.localStorage.getItem('cart') || '')
        : [];

      const index = cartData.findIndex(
        (el: Product) => el.id == this.productId
      );
      console.log(cartData, index);

      this.selectCountControl.setValue(cartData[index]?.count || 0);
    });

    this.productsData$ = this.productService.getPharmacyItemById(
      this.productId
    );
  }

  public addToCart(item: Product) {
    const existCart = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart') || '')
      : [];

    const changedIndex = existCart.findIndex(
      (el: Product) => el.id === item.id
    );
    console.log(changedIndex);

    if (changedIndex !== -1) {
      existCart[changedIndex].count = this.selectCountControl.value;
      window.localStorage.setItem('cart', JSON.stringify(existCart));
      this.openSnackBar(
        `Count of Drugs in cart successfully changed to ${this.selectCountControl.value}`
      );
    } else {
      const products = window.localStorage.getItem('cart')
        ? [...existCart]
        : [];
      products.push({ ...item, count: this.selectCountControl.value });
      window.localStorage.setItem('cart', JSON.stringify(products));
      this.openSnackBar(
        `${this.selectCountControl.value} packages of ${item.title} successfully added to cart`
      );
    }
  }

  public openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }
}
