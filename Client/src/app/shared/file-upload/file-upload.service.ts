/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AbstractRestService } from 'src/app/admin/utils/_helper/_gen_crudapi';
import { FileUpload } from '../models/file.mode';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService extends AbstractRestService<FileUpload> {
  private basePath = '/uploads';

  private _files$: BehaviorSubject<FileUpload[]> = new BehaviorSubject(null);
  constructor(
    private storage: AngularFireStorage,
    public override afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    super('UserFiles', afs, 'StaffTypes');
  }

  pushFileToStorage(
    fileUpload: FileUpload,
    userId: number
  ): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            fileUpload.userId = userId;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    const result = {
      url: fileUpload.url,
      userId: fileUpload.userId,
      name: fileUpload.name,
      fileCategory: fileUpload.fileCategory,
    };
    console.log(result);
    this.add(result);
  }

  getFiles(id: string): Observable<FileUpload[]> {
    this.getListFiltered('userId', id).subscribe((response: any) => {
      // let learners = [];
      this._files$.next(
        response.map((a: any) => {
          const data = a.payload.doc.data();
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const id = a.payload.doc.id;
          const type = a.type;
          return { id, type, ...data };
        })
      );
    });

    return this._files$;
  }

  deleteFile(fileUpload: FileUpload): void {
    this.delete(fileUpload.id)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch((error) => console.log(error));
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
