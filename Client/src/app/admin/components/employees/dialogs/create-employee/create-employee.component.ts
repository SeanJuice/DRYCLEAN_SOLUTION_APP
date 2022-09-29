import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerInterface } from 'src/app/admin/models/Customer.interface';
import { EmployeeService } from 'src/app/admin/services/employee.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  addCForm = new FormGroup({
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
  client!: any;
  formBuilder: any;
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private service: EmployeeService
  ) {}

  ngOnInit(): void {}

  createClient() {
    // console.log(this.addCForm.value, this.addCForm.valid);
    if (this.addCForm.valid) {
      this.service
        .createEntity(this.addCForm.value as CustomerInterface)
        .subscribe((res: any) => {
          this.addCForm.reset();
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
    this.addCForm.reset();
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
