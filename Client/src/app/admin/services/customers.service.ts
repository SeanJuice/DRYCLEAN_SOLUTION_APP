import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerInterface } from '../models/Customer.interface';

import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class CustomersService extends CrudService<CustomerInterface> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'customer');
  }

  getCustomers() {
    const baseUrl: string = environment.BASE_API;
    return this._httpClient.get<any[]>(`${baseUrl}/auth/getCustomers`);
  }
}
