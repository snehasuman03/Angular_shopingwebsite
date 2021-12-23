import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  getLocalStorageData: any;
  newVal: any; 
  constructor() {}

  ngOnInit(): void {
    this.getLocalStorageData = localStorage.getItem('details');
    this.newVal = JSON.parse(this.getLocalStorageData);
    console.log(this.newVal);
  }
  placeOrder(product: any) {
    console.log(product);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      product: product.id,
      noOfItems: 2,
      totalPrice: 0,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch('http://localhost:4000/api/v1/orders/', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        console.log('hurrah my order is booked');
      })
      .catch((error) => console.log('error', error));
  }
}
