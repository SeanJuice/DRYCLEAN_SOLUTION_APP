import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  user = JSON.parse(localStorage.getItem('user')!);

  constructor(private ordersService: OrderService) {}

  ngOnInit() {
    if (this.user?.userRole == 1) {
      this.getMyOrders();
    } else {
      this.getMyOrders();
    }
    console.log(this.orders);
  }

  getOrders() {
    this.ordersService.getAll().subscribe((response) => {
      this.orders = [];
      response.forEach((type: any) => {
        const data: any = {
          ...type,
        };
        this.orders.push(data);
      });
    });
  }

  getMyOrders() {
    this.ordersService
      .getMyOrders(this.user.id)
      .subscribe((response: any[]) => {
        this.orders = [];
        this.orders = response.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const type = a.type;
          return { id, type, ...data };
        });
      });
  }
}
