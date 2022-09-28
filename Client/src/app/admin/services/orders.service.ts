import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends CrudService<Order> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'order');
  }

  getMyOrders(id: number) {
    return this._httpClient.get<any[]>(`${this.apiUrl}/${id}`);
  }
}
