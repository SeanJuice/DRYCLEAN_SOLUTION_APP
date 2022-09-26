// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>,
//               next: HttpHandler): Observable<HttpEvent<any>> {

//         if (localStorage.getItem('Token')) {
//             const jwt = JSON.parse(localStorage.getItem('Token')!)
//             const token = jwt.token

//             const cloned = req.clone({
//                 headers: req.headers.set("Authorization",
//                     "Bearer " + token)
//             });

//              return next.handle(cloned);
//         }
//         else {
//             return next.handle(req);
//         }
//     }
// }

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUtils } from '../services/auth.utils';
import { TokenStorageService } from '../services/tokeStorage.service';

// const TOKEN_HEADER_KEY = 'Authorization';       // for Spring Boot back-end
const TOKEN_HEADER_KEY = 'x-access-token'; // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;

    if (
      this.tokenStorage.getToken() &&
      !AuthUtils.isTokenExpired(this.tokenStorage.getToken())
    ) {
      authReq = req.clone({
        headers: req.headers.set(
          TOKEN_HEADER_KEY,
          `Authorization: Bearer ${this.tokenStorage.getToken()}`
        ),
      });
    }

    // Response
    return next.handle(authReq);
    // .pipe(
    //     catchError(() => {

    //         // Catch "401 Unauthorized" responses
    //         if ( error instanceof HttpErrorResponse && error.status === 401 )
    //         {
    //             // Sign out
    //             this.tokenStorage.signOut();

    //             // Reload the app
    //             location.reload();
    //         }

    //         //return new Error(error);
    //     })
    // );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
