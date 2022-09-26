import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CustomerInterface } from '../../models/Customer.interface';
import { CustomersService } from '../../services/customers.service';
import { ShareDataService } from '../../services/shareData.service';
import { CreateClientComponent } from './dialogs/create-client/create-client.component';
import { UpdateClientComponent } from './dialogs/update/update-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  customers: CustomerInterface[] = [];

  constructor(private clientDialog:MatDialog, private customersService: CustomersService,) {
    this.getCustomers();
  }

  ngOnInit() {

  }

  AddClient()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "80%";

    const addClientModal =  this.clientDialog.open(CreateClientComponent, dialogConfig);
    addClientModal.afterClosed().subscribe(()=>{
       this.ngOnInit();
      })
  }

  getCustomers() {
    this.customersService
      .getList()
      .then((response) => {
        this.customers = [];
        response.docs.forEach((type: any) => {
          const data: any = {
            ...type.data(),
            id: type.id,
          };
          this.customers.push(data);
        });
      })
      .catch((error) => {});
  }

  edit(client : any)
  {
    console.log(client);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    dialogConfig.data = client;

    const modal = this.clientDialog.open(UpdateClientComponent, dialogConfig);
    modal.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

  remove(id: string) {
    Swal.fire({
      title: 'Are you sure you want to remove this Customer?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customersService.delete(id).then(() => {
          Swal.fire(
            'Deleted!',
            'Customer has been deleted.',
            'success'
          )
          // this.
        })

      }
    })
  }
}
