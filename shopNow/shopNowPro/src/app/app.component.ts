import { Component, OnInit } from '@angular/core';
import { ShopNowServicesService } from './shop-now-services.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopNowPro';
  listofProducts:any;

constructor(private procucts:ShopNowServicesService, private router:Router){
}
  ngOnInit(): void {
    this.showProductsDetail();
 
  }
  showProductsDetail(){
this.procucts.getProductDetails().subscribe((res)=>{
  console.log("products details: ", res);
  this.listofProducts=res;
  console.log("all products detayils", this.listofProducts)
})

}

// cart(){
//   this.router.navigateByUrl('/cart');
//   console.log("cart clicked")

// }
addtocart(){
  localStorage.setItem('details', JSON.stringify(this.listofProducts));

}

 
}
