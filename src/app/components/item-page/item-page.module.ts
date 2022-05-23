import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ItemPageComponent } from './item-page.component';

@NgModule({
  declarations: [ItemPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [ItemPageComponent],
})
export class ItemPageModule {}
