import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:"header",component:HeaderComponent},
  {path:"cart",component:AddToCartComponent},
  {path:"orders",component:OrdersComponent},
  {path:"footer",component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
