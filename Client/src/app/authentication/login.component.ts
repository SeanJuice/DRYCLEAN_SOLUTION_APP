import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { loginReponse } from '../shared/models/loginResponse';
import { AuthService } from './services/auth.service';
import { AuthUtils } from './services/auth.utils';
import { TokenStorageService } from './services/tokeStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = this.fb.group({
    email: ['fobiv94328@edxplus.com', [Validators.required, Validators.email]],
    password: ['#Shaun123555', Validators.required],
  });

  isLoading: boolean = false;

  constructor(
    private router: Router,
    public dataService: AuthService,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  LoginUser() {
    if (this.loginFormGroup.valid) {
      this.isLoading = true;
      this.dataService.loginUser(this.loginFormGroup.value).subscribe(
        async (data: loginReponse) => {
          if (data.status == 401) {
            this.isLoading = false;
          } else if (data.status == 424) {
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
                  this.LoginUser();
                },
                (error) => {}
              );
            }
          } else {
            const user = AuthUtils._decodeToken(data.accessToken);

            this.tokenStorage.saveUser(user);
            this.tokenStorage.saveToken(data.accessToken);
            this.router.navigate(['admin/dashboard']);
          }
        },
        (error: any) => {
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }

  // VerifyOTP(otp: number) {
  //    const user: User = {
  //     emailAddress: this.loginFormGroup.value.UserName,
  //     otp: otp.toString()
  //    }

  //     this.dataService.validateOtp(user).subscribe({
  //       next: (data) => {
  //         this.router.navigate(['../admin'])
  //       },
  //      error: (response: HttpErrorResponse) => {
  //       if (response.status === 400) {
  //         this.snackBar.open(response.error, 'X', {duration: 5000});
  //       }
  //     }
  //   })
  // }
}
