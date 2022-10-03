/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileUpload } from '../../models/file.mode';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss'],
})
export class UploadListComponent implements OnInit {
  fileUploads!: any;
  public _files$: BehaviorSubject<FileUpload[]> = new BehaviorSubject(null);
  @Input() userId!: string;
  constructor(private uploadService: FileUploadService) {
    console.log(this.userId);
  }

  ngOnInit(): void {
    this.uploadService.getFiles(this.userId).subscribe((fileUploads) => {
      this._files$.next(fileUploads);
      console.log(this.fileUploads);
    });
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
