import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/admin/services/_service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css'],
})
export class EditShopComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    managerName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  constructor(
    private clientDialogRef: MatDialogRef<any>,
    private service: ServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.addForm.patchValue({
      ...this.data,
    });
  }

  create() {
    // console.log(this.addForm.value, this.addForm.valid);
    if (this.addForm.valid) {
      this.service
        .updateEntity(this.data.id, this.addForm.value)
        .subscribe((res: any) => {
          this.addForm.reset();
          this.onClose();

          this.popUpAlert(
            '',
            'The shop has been successfully update',
            'success',
            false
          );
        });
    }
  }

  onClose() {
    this.addForm.reset();
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
