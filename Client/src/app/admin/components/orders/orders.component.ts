import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: any[] = [];
user = JSON.parse(localStorage.getItem('user')!);

  constructor(private ordersService: OrderService) { }

  ngOnInit() {
    if(this.user?.userRole ==1) {
      this.getMyOrders();
      
    } else {
      this.getMyOrders();
    }
    console.log(this.orders)
  }

  getOrders() {
    this.ordersService
      .getList()
      .then((response) => {
        this.orders = [];
        response.docs.forEach((type: any) => {
          const data: any = {
            ...type.data(),
            id: type.id,
          };
          this.orders.push(data);
        });
      })
      .catch((error) => {});
  }

  getMyOrders() {
    this.ordersService
    .getListFiltered(
      'id',
      this.user.uid
    )
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
