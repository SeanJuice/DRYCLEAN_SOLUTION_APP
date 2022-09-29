import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/admin/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  client!: any;
  editForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Surname: new FormControl('', Validators.required),
    Company: new FormControl('', Validators.required),
    EmployeeCode: new FormControl('', Validators.required),

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
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private customerService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
}
