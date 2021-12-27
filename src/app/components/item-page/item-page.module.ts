import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ItemPageComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ItemPageComponent],
})
export class ItemPageModule {}
