import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { ItemPageModule } from './components/item-page/item-page.module';
import { MainModule } from './components/main/main.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsModule } from './components/about-us/about-us.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HeaderModule,
    ItemPageModule,
    NoopAnimationsModule,
    AboutUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
