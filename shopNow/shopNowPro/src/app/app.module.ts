import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatSliderModule} from '@angular/material/slider';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    AddToCartComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule,
    AppRoutingModule,MatToolbarModule, BrowserAnimationsModule,MatIconModule
    ,MatCarouselModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
