import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ShopNowServicesService {
  constructor(private http: HttpClient) {}

  getProductDetails() {
    return this.http.get('http://localhost:4000/api/v1/products');
  }

  getOrdersDetail(){
    return this.http.get('http://localhost:4000/api/v1/orders');
  

  }
}
