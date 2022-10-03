import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInterface } from 'src/app/admin/models/Customer.interface';
import { CustomersService } from 'src/app/admin/services/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
})
export class UpdateClientComponent implements OnInit {
  client!: any;

  editClientForm: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Surname: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    MobilePhone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    PostalCode: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Province: new FormControl('', Validators.required),
    Notes: new FormControl(''),
  });
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private customerService: CustomersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.editClientForm.patchValue({
      ...this.data,
    });
  }

  createClient() {
    // console.log(this.editClientForm.value, this.editClientForm.valid)
    if (this.editClientForm.valid) {
      this.customerService
        .updateEntity(
          this.data.id,
          this.editClientForm.value as CustomerInterface
        )
        .then((res: any) => {
          this.editClientForm.reset();
          this.onClose();

          this.popUpAlert(
            '',
            'The client has been successfully update',
            'success',
            false
          );
        });
    }
  }

  updateClient() {}

  editClient(client: any) {
    console.log(client);
  }

  onClose() {
    this.editClientForm.reset();
    this.clientDialogRef.close();
  }

  popUpAlert(
    messageboodskaap: string,
    icon: any,
    showConfirmButton: any,
    showCancelButton: boolean
  ) {
    return Swal.fire({
      text: messageboodskaap,
      icon: icon,
      showConfirmButton: showConfirmButton,
      showCancelButton: showCancelButton,
    });
  }
}
