import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractRestService } from '../utils/_helper/_gen_crudapi';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends AbstractRestService<any>{


  constructor(private _httpClient: HttpClient, public override afs: AngularFirestore) {

    super('Orders',afs,'OrderTypes');
}

}
