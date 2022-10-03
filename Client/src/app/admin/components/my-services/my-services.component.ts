import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Service } from '../../models/Service.interface';
import { ShopService } from '../../services/shopservice.service';
import { ToastService } from '../../utils/_toast/toast.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css'],
})
export class MyServicesComponent implements OnInit {
  public services: Service[] = [];
  public categories: any[] = [];
  public isLoaded = false;
  myForm!: FormGroup;
  constructor(
    private shopService: ShopService,
    private fb: FormBuilder,
    private toastr: ToastService
  ) {
    this.getServiceTypes();
    this.getServices();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      // Service_Description: ['', [Validators.required]],
      picture: [''],
      serviceTypeId: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  saveForm(form: any) {
    if (this.myForm.valid) {
      Swal.fire({
        title: 'Do you want add this service?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.shopService.createEntity(form.value).subscribe(
            (res: any) => {
              Swal.fire('Service Successfully Created!', '', 'success');
              this.getServices();
            },
            (error) => {
              this.toastr.showSuccess('Error Please Check the Enytred Data!');
            }
          );
        }
      });
    }
  }

  removeService(id: number) {
    Swal.fire({
      title: 'Are you sure you want to remove this service?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.shopService.deleteEntity(id).then(() => {
          Swal.fire('Deleted!', 'Service has been deleted.', 'success');
          // this.
        });
      }
    });
  }

  getServices() {
    this.shopService.getAll().subscribe((response) => {
      //this.services = Object.values(response);
      this.services = Object.values(response).map((res) => {
        return {
          serviceType: this.categories.find((x) => x.id == res.serviceTypeId)
            .name,
          ...res,
        };
      });

      this.isLoaded = true;
    });
    // .catch((error) => {});
  }
  getServiceTypes() {
    this.shopService.getAllServiceTypes().subscribe(
      (response) => {
        this.categories = Object.values(response);
      },
      (error) => {}
    );
  }
}
