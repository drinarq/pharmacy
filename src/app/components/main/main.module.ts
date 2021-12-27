import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HttpClientModule, ItemModule],
  exports: [MainComponent],
})
export class MainModule {}
