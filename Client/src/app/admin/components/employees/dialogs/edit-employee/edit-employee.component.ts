import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/admin/services/employee.service';
import { ServiceService } from 'src/app/admin/services/_service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  client!: any;
  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobilePhone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    notes: new FormControl(''),
    shopId: new FormControl('', Validators.required),
  });
  shops: any[] = [];
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private customerService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shopsService: ServiceService
  ) {
    this.getShops();
  }

  ngOnInit(): void {
    this.editForm.patchValue({
      ...this.data,
    });
  }

  createClient() {
    console.log(this.editForm.value, this.editForm.valid);
    if (this.editForm.valid) {
      this.customerService
        .updateEntity(this.data.id, this.editForm.value)
        .subscribe((res: any) => {
          this.editForm.reset();
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
    this.editForm.reset();
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

  getShops() {
    this.shopsService.getAll().subscribe((response) => {
      this.shops = Object.values(response);
    });
  }

  onNoClick(): void {
    this.clientDialogRef.close();
  }
}
