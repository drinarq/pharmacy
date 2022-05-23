import { Component, OnInit } from '@angular/core';
import {
  delay,
  elementAt,
  filter,
  map,
  mergeMap,
  Observable,
  of,
  take,
} from 'rxjs';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsApiService } from 'src/app/shared/services/items.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public searchControl = new FormControl('');
  public filteredData$: Observable<Product[]>;
  constructor(
    private productService: ProductsApiService,
    private router: Router
  ) {}
  public products$: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService.getPharmacyItems().pipe((products) => {
      return products;
    });

    this.filteredData$ = this.products$;

    this.search();
  }

  public search(): void {
    this.searchControl.valueChanges
      .pipe(
        mergeMap((value) => {
          this.filteredData$ = this.products$.pipe(
            delay(500),

            map((items) => {
              return items.filter((el) => {
                return el.title.toLowerCase().includes(value.toLowerCase());
              });
            })
          );
          return of([]);
        })
      )
      .subscribe();
  }

  public link(id: string) {
    this.router.navigateByUrl(`products/${id}`);
  }

  public clear() {
    this.searchControl.setValue('');
  }
}
