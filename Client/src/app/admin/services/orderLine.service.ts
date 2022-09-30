import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class OrderLineService extends CrudService<any> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'orderline');
  }

  getLineOrders(id: number) {
    return this._httpClient.get<any[]>(`${this.apiUrl}/${id}`);
  }
}
