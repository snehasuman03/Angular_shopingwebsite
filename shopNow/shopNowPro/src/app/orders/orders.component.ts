import { Component, OnInit } from '@angular/core';
import { ShopNowServicesService } from '../shop-now-services.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public listofOrders: any;
  constructor(private orders: ShopNowServicesService) {}

  ngOnInit(): void {
    this.showOrdersDetails();
  }

  showOrdersDetails() {
    this.orders.getOrdersDetail().subscribe((result) => {
      console.log('orders Data: ');
      console.log('orders details', result);
      this.listofOrders = result;
    });
  }

  status(event: any) {
    event.preventDefault();
    const value = event.target.getAttribute('value');
    const id = event.target.getAttribute('id');
    console.log(value, id);
    console.log('status clicked');

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let status = id == 1 ? 'on the way' : 'delivered';
    var raw = JSON.stringify({
      status: status,
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
    };

    fetch(`http://localhost:4000/api/v1/orders/${value}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));


  }


  
}
