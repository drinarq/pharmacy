import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() public productData: Product | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log(this.productData);
  }
}
