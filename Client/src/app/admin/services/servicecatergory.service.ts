import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceCategory } from '../models/Service.interface';
import { AbstractRestService } from '../utils/_helper/_gen_crudapi';

@Injectable({
  providedIn: 'root'
})
export class ServicecatergoryService extends AbstractRestService<ServiceCategory> {

  constructor(private _httpClient: HttpClient, public override afs: AngularFirestore) {

    super('ServiceCategories',afs,'CategoryType');
  }

}
