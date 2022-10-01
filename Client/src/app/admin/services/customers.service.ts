import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInterface } from '../models/Customer.interface';

import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class CustomersService extends CrudService<CustomerInterface> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'auth');
  }

  getCustomers() {
    return this._httpClient.get<any[]>(`${this.apiUrl}/getCustomers`);
  }
}
