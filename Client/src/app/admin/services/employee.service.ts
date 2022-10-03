import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerInterface } from '../models/Customer.interface';
import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends CrudService<any> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'employee');
  }

  override createEntity(
    body: CustomerInterface
  ): Observable<CustomerInterface> {
    return this.http.post<CustomerInterface>(
      this.apiUrl + '/createEmployee',
      body
    );
  }
}
