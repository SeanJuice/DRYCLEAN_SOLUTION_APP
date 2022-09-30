import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderLineService } from 'src/app/admin/services/orderLine.service';
import { OrderService } from 'src/app/admin/services/orders.service';

@Component({
  selector: 'app-viewOrder',
  templateUrl: './viewOrder.component.html',
  styleUrls: ['./viewOrder.component.css'],
})
export class ViewOrderComponent implements OnInit {
  orderLines: any[] = [];

  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private orderLineService: OrderLineService,
    private orderService: OrderService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.getOrders();
  }

  AcceptOrder(isAccept: boolean) {
    if (isAccept) {
    } else {
    }
  }
  getOrders() {
    this.orderLineService.getLineOrders(this.data.id).subscribe((res) => {
      this.orderLines = Object.values(res);
      console.table(res);
    });
  }
}
