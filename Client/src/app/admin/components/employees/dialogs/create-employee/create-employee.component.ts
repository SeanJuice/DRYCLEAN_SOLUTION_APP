import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerInterface } from 'src/app/admin/models/Customer.interface';
import { EmployeeService } from 'src/app/admin/services/employee.service';
import { ServiceService } from 'src/app/admin/services/_service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  addCForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobilePhone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    notes: new FormControl(''),
    employeeCode: new FormControl(Math.floor(Math.random() * 31240)),
    shopId: new FormControl('', Validators.required),
  });
  client!: any;
  formBuilder: any;
  shops: any[] = [];
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private service: EmployeeService,
    private shopsService: ServiceService
  ) {
    this.getShops();
  }

  ngOnInit(): void {}

  createClient() {
    // console.log(this.addCForm.value, this.addCForm.valid);
    if (this.addCForm.valid) {
      this.service
        .createEntity(this.addCForm.value as unknown as CustomerInterface)
        .subscribe((res: any) => {
          console.log(res);
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

  getShops() {
    this.shopsService.getAll().subscribe((response) => {
      this.shops = Object.values(response);
    });
  }
}
