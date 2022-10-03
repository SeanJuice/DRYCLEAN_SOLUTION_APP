import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../../models/file.mode';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss'],
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileUpload!: any;

  constructor(private uploadService: FileUploadService) {
    console.log(this.fileUpload);
  }

  ngOnInit(): void {}

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
