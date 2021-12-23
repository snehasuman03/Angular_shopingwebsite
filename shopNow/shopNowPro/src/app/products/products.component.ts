import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';
import { ShopNowServicesService } from '../shop-now-services.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title = 'shopNowPro';
  listofProducts: any;
  products:any=[];

  constructor(
    private procucts: ShopNowServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.showProductsDetail();
  }
  showProductsDetail() {
    this.procucts.getProductDetails().subscribe((res) => {
      console.log('products details: ', res);
      this.listofProducts = res;
      console.log('all products detayils', this.listofProducts);
    });
  }

  // cart(){
  //   this.router.navigateByUrl('/cart');
  //   console.log("cart clicked")

  // }
  addtocart(val:any) {
    this.products.push(val);
    localStorage.setItem('details', JSON.stringify(this.products));
    console.log(val)
  }
}
