export class FileUpload {
  id?: string;
  key?: string;
  name: string;
  url: string;
  file?: File;
  userId: any;
  fileCategory?: string;

  constructor(file: File) {
    this.file = file;
  }
}
