import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerInterface } from 'src/app/admin/models/Customer.interface';
import { CustomersService } from 'src/app/admin/services/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  addClientForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Surname: new FormControl('', Validators.required),
    Company: new FormControl('', Validators.required),
    WebPage: new FormControl('', Validators.required),

    JobTitle: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    BusinessPhone: new FormControl('', Validators.required),
    MobilePhone: new FormControl('', Validators.required),
    FaxNumber: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    PostalCode: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Province: new FormControl('', Validators.required),
    Notes: new FormControl('', Validators.required),
  });
  client!: any;
  formBuilder: any;
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private customerService: CustomersService
  ) {}

  ngOnInit(): void {}

  createClient() {
    console.log(this.addClientForm.value, this.addClientForm.valid);
    if (this.addClientForm.valid) {
      this.customerService
        .createEntity(this.addClientForm.value as CustomerInterface)
        .subscribe((res: any) => {
          this.addClientForm.reset();
          this.onClose();

          this.popUpAlert(
            '',
            'The client has been successfully added',
            'success',
            false
          );
        });
    }
  }

  addClient(client: any) {
    console.log('Sending client to API');
  }

  onClose() {
    this.addClientForm.reset();
    this.clientDialogRef.close();
  }

  // creation of client notification popup
  popUpAlert(
    headerMessage: string,
    message: string,
    icon: any,
    showCancelButton: boolean
  ) {
    return Swal.fire({
      title: headerMessage,
      text: message,
      icon: icon,
      showCancelButton: showCancelButton,
    });
  }

  onNoClick(): void {
    this.clientDialogRef.close();
  }
}
