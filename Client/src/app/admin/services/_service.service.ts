import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService extends CrudService<any> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'shop');
  }
}
