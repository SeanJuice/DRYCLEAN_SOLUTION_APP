import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Quotation } from '../models/Quotation.interface';

import { AbstractRestService } from '../utils/_helper/_gen_crudapi';
import { CrudService } from './base/base.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService extends CrudService<any> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'service');
  }

  getAllServiceTypes(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.apiUrl}/types`);
  }
}

export class QouteService extends AbstractRestService<Quotation> {
  constructor(
    private _httpClient: HttpClient,
    public override afs: AngularFirestore
  ) {
    super('Quotations', afs, 'QuotationsTypes');
  }
}
