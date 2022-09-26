import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/user.service';
import { LoginUser } from 'src/app/shared/models/login-user';
import { loginReponse } from 'src/app/shared/models/loginResponse';
import { createUserDTO } from 'src/app/shared/models/register-user.';
import { environment } from 'src/environments/environment';
const rootUrl = environment.BASE_API + '/auth/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private http: HttpClient,
    private userService: UserService,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userService.getDocument(user.uid).then((document) => {
          this.userData = document;
          this.userData.uid = user.uid;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        });
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign up with email/password
  RegisterUser(registerUser: createUserDTO, userInformation: any) {
    return this.http.post<loginReponse>(rootUrl + 'register/', registerUser);
  }

  // Sign in with email/password
  loginUser(loginUser: LoginUser) {
    return this.http.post<loginReponse>(rootUrl + 'login/', loginUser);
  }

  // code
  verifyCode(_code: number) {
    return this.http.post<loginReponse>(rootUrl + 'verify/', { code: _code });
  }

  // Send email verfificaiton when new user sign up
  // SendVerificationMail() {
  //   return this.afAuth.currentUser
  //     .then((u: any) => u.sendEmailVerification())
  //     .then(() => {
  //       window.alert('Email varication has been  sent, check your inbox.');

  //     });
  // }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(userData: any, uid: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${uid}`);
    return userRef.set(userData, {
      merge: true,
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
