import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemModule } from '../item/item.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ItemModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
