import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FileUpload } from '../../models/file.mode';
import { FileUploadService } from '../file-upload.service';
const fileTypes = ['Pupil Report', 'Copy of ID', 'Proof of Payment', 'Other'];

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnInit {
  @Input() userId!: number;
  fileTypes: string[] = fileTypes;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  file = '';
  form = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileType: new FormControl('', [Validators.required]),
  });

  isFileChosen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    console.log(this.userId);
    this.form.get('file').valueChanges.subscribe((_) => {
      this.isFileChosen.next(true);
    });
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.file = event.target.files[0].name;
      this.isFileChosen.next(true);
      this.form.get('file').clearValidators();
    }
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.currentFileUpload.fileCategory = this.form.controls.fileType.value;
        this.uploadService
          .pushFileToStorage(this.currentFileUpload, this.userId)
          .subscribe(
            (percentage) => {
              this.percentage = Math.round(percentage ? percentage : 0);
            },
            (error) => {
              console.log(error);
            }
          );
        this.form.reset();
        this.isFileChosen.next(false);
      }
    }
  }
}
