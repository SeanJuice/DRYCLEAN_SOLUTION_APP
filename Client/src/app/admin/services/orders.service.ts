import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { acceptOrder, Order } from '../models/order';
import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends CrudService<Order> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'order');
  }

  override createEntity(body: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/createOrder`, body);
  }

  getMyOrders(id: number) {
    return this._httpClient.get<any[]>(`${this.apiUrl}/myOrders/${id}`);
  }

  acceptRejectOrder(body: acceptOrder): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/createOrder`, body);
  }
}
