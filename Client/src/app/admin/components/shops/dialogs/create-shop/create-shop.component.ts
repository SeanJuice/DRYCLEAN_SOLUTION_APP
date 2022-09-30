import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/admin/services/_service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css'],
})
export class CreateShopComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    managerName: new FormControl('', Validators.required),
  });
  client!: any;
  formBuilder: any;
  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private service: ServiceService
  ) {}

  ngOnInit(): void {}

  create() {
    console.log(this.addForm.value, this.addForm.valid);
    if (this.addForm.valid) {
      this.service.createEntity(this.addForm.value).subscribe((res: any) => {
        this.addForm.reset();
        this.onClose();

        this.popUpAlert(
          '',
          'The shop has been successfully added',
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
    this.addForm.reset();
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
