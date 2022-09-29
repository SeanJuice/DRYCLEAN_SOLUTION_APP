import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  user = this.authService.getUser();

  constructor(
    private ordersService: OrderService,
    private authService: TokenStorageService
  ) {}

  ngOnInit() {
    if (this.user?.userRole == 1) {
      this.getMyOrders();
    } else {
      this.getMyOrders();
    }
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
        console.log(response);
        this.orders = Object.values(response);
      });
  }
}
