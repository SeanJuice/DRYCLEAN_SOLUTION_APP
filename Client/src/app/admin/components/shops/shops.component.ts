import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ShopService } from '../../services/shopservice.service';
import { CreateShopComponent } from './dialogs/create-shop/create-shop.component';
import { EditShopComponent } from './dialogs/edit-shop/edit-shop.component';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  shops: any[] = [];
  user = JSON.parse(localStorage.getItem('user')!);

  constructor(private shopsService: ShopService, private Dialog: MatDialog) {}

  ngOnInit() {
    this.getShops();
    console.log(this.shops);
  }

  getShops() {
    this.shopsService.getAll().subscribe((response) => {
      this.shops = [];
      response.forEach((type: any) => {
        this.shops.push(type);
      });
    });
  }
  AddShop() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';

    const addClientModal = this.Dialog.open(CreateShopComponent, dialogConfig);
    addClientModal.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
  edit(client: any) {
    console.log(client);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';
    dialogConfig.data = client;

    const modal = this.Dialog.open(EditShopComponent, dialogConfig);
    modal.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  remove(id: number) {
    Swal.fire({
      title: 'Are you sure you want to remove this Shop?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.shopsService.deleteEntity(id).subscribe(() => {
          Swal.fire('Deleted!', 'shop has been deleted.', 'success');
          // this.
        });
      }
    });
  }
}
