import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CustomerInterface } from '../models/Customer.interface';

import { Service } from '../models/Service.interface';
import { AbstractRestService } from '../utils/_helper/_gen_crudapi';

@Injectable({
  providedIn: 'root'
})
export class CustomersService  extends AbstractRestService<CustomerInterface>{


  constructor(private _httpClient: HttpClient, public override afs: AngularFirestore) {

    super('Customers',afs,'CustomerTypes');
}


}
