import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartForm: FormGroup;

  public cartData: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cartData = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart') || '')
      : [];
    this.cartForm = this.fb.group({
      firstName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      home: '',
    });
  }

  public productPageLink(id: string) {
    this.router.navigateByUrl(`/products/${id}`);
  }

  public submit() {
    if (this.cartForm.invalid) {
      this.cartForm.markAllAsTouched();
    } else {
      window.localStorage.clear();
      this.openSnackBar(
        'Sorry for the inconvenience, payment is temporarily unavailable'
      );
      this.router.navigateByUrl('/products');
    }
  }

  public getTotalBill() {
    return this.cartData.reduce((acc, item) => {
      return acc + (item.count || 1) * item.price;
    }, 0);
  }

  public openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 5000,
    });
  }
}
