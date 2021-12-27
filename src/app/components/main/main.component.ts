import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsApiService } from 'src/app/shared/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private productService: ProductsApiService,
    private router: Router
  ) {}
  public products$: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService
      .getPharmacyItems()
      .pipe((products) => products);
  }

  public link(id: string) {
    this.router.navigateByUrl(`products/${id}`);
  }
}
