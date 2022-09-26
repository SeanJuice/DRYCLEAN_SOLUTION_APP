import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CustomerInterface } from '../models/Customer.interface';

import { Service } from '../models/Service.interface';
import { AbstractRestService } from '../utils/_helper/_gen_crudapi';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends AbstractRestService<any>{


  constructor(private _httpClient: HttpClient, public override afs: AngularFirestore) {

    super('Users',afs,'Users');
}


}
