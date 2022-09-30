import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderLineService } from 'src/app/admin/services/orderLine.service';
import { OrderService } from 'src/app/admin/services/orders.service';
import { ToastService } from 'src/app/admin/utils/_toast/toast.service';

@Component({
  selector: 'app-viewOrder',
  templateUrl: './viewOrder.component.html',
  styleUrls: ['./viewOrder.component.css'],
})
export class ViewOrderComponent implements OnInit {
  orderLines: any[] = [];
  userOrder: any;

  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private orderLineService: OrderLineService,
    private orderService: OrderService,
    private toastr: ToastService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.userOrder = this.data;
    this.getOrders();
  }

  AcceptOrder(isAccept: boolean) {
    const decision = {
      isAccepted: isAccept,
      id: this.userOrder,
    };
    this.orderService
      .acceptRejectOrder(decision, this.userOrder.userId)
      .subscribe(
        (res) => {
          this.toastr.showError('Error');
        },
        (error) => {
          this.toastr.showError('Error');
        }
      );
  }
  getOrders() {
    this.orderLineService.getLineOrders(this.data.id).subscribe((res) => {
      this.orderLines = Object.values(res);
      console.table(res);
    });
  }
}
