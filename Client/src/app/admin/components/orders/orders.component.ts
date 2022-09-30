import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { OrderService } from '../../services/orders.service';
import { ViewOrderComponent } from './dialogs/viewOrder/viewOrder.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  user = this.authService.getUser();
  isAdmin: boolean;
  constructor(
    private ordersService: OrderService,
    private authService: TokenStorageService,
    private Dialog: MatDialog
  ) {}

  ngOnInit() {
    if (this.user?.userRole == 1) {
      this.getMyOrders();
    } else {
      this.getOrders();
      this.isAdmin = true;
    }
  }

  getOrders() {
    this.ordersService.getAll().subscribe((response) => {
      this.orders = Object.values(response);
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

  viewOrder(order: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '80%';
    dialogConfig.data = order;

    const addClientModal = this.Dialog.open(ViewOrderComponent, dialogConfig);
    addClientModal.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
