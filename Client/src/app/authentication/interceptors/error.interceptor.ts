import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/admin/utils/_toast/toast.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error');
          this.toastr.showError(`Error: ${error.error.message}`);
        } else {
          console.log('this is server side error', error);
          this.toastr.showError(
            `Error Code: ${error.status},  Message: ${error.message}`
          );
          console.log(errorMsg);
        }
        console.log(errorMsg);
        return throwError(errorMsg);
      })
    );
  }
}
