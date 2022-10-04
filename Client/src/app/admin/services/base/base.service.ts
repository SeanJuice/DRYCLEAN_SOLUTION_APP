import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { environment } from 'src/environments/environment';
import { AuditTrailService } from '../auditTrail.service';
const USER_KEY = 'auth-user';
export class CrudService<T> {
  protected readonly apiUrl = `${this.baseUrl}/${this.entityname}`;
  user: any;
  constructor(
    protected readonly http: HttpClient,
    protected readonly entityname: string,
    private readonly baseUrl: string = environment.BASE_API,
    private afs?: AuditTrailService,
    private authService?: TokenStorageService
  ) {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  getAll(query?: { [key: string]: string }): Observable<T[]> {
    const params = new HttpParams({ fromObject: query });
    return this.http.get<T[]>(this.apiUrl, { params });
  }

  createEntity(body: T): Observable<T> {
    this.audit(this.entityname, `creating ${this.entityname}`);
    return this.http.post<T>(this.apiUrl, body);
  }

  fetchEntity(id: number): Observable<T> {
    const url = this.entityUrl(id);
    return this.http.get<T>(url);
  }

  async updateEntity(id: number, body: T): Promise<Observable<T>> {
    await this.audit(this.entityname, `updating ${this.entityname}`);
    const url = this.entityUrl(id);
    return this.http.put<T>(url, body);
  }

  async deleteEntity(id: number): Promise<Observable<T>> {
    await this.audit(this.entityname, `delete ${this.entityname}`);
    const url = this.entityUrl(id);
    return this.http.delete<T>(url);
  }

  protected entityUrl(id: number): string {
    return [this.apiUrl, id].join('/');
  }

  async audit(table: string, operation: string): Promise<any> {
    const user = this.user
      ? this.user
      : {
          name: 'Admin ',
          surname: 'User',
        };

    const audit = {
      Date: Date.now(),
      Operation: operation,
      Table: table,
      userId: user.id,
    };

    console.log(audit);
    return this.afs.createEntity(audit);
  }
}
