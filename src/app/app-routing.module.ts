import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'products', component: MainComponent },
  { path: 'products/:id', component: ItemPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
