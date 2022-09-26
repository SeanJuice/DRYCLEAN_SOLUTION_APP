import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '#Shaun123555',
      [Validators.required, Validators.minLength(6), Validators.maxLength(16)],
    ],
  });

  constructor(
    private router: Router,
    private dataService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  RegisterUser() {
    console.log(this.registerFormGroup.valid);
    if (this.registerFormGroup.valid) {
      let userData = {
        name: this.registerFormGroup.controls['name'].value,
        surname: this.registerFormGroup.controls['surname'].value,
        phoneNumber: Number(
          this.registerFormGroup.controls['phoneNumber'].value
        ),
        email: this.registerFormGroup.controls['email'].value,
        password: this.registerFormGroup.controls['password'].value,

        // userRole: UserRoles.CUSTOMER,
      };
      this.dataService
        .RegisterUser(this.registerFormGroup.value, userData)
        .subscribe(
          async () => {
            // this.registerFormGroup.reset();
            const { value: code } = await Swal.fire({
              title: 'Enter your varification code. Form your email',
              input: 'number',
              inputLabel: 'varification code',
              inputPlaceholder: 'Enter your code.',
            });

            if (code) {
              // Swal.fire(`Entered email: ${code}`);
              this.dataService.verifyCode(code).subscribe(
                (res: any) => {
                  this.router.navigate(['login']).then((navigated: boolean) => {
                    if (navigated) {
                      this.snackBar.open(`Registered successfully`, 'X', {
                        duration: 5000,
                      });
                    }
                  });
                },
                (error) => {}
              );
            }
          },
          (response: HttpErrorResponse) => {
            if (response.status === 403) {
              this.snackBar.open(response.error, 'X', { duration: 5000 });
            }
            if (response.status === 500) {
              this.snackBar.open(response.error, 'X', { duration: 5000 });
            }
          }
        );
    }
  }
}
