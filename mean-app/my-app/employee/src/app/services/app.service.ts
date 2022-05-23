import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(public httpClient: HttpClient) { }


  public getEmployee(url : string): Observable<any> {
    return this.httpClient.get<any>(url);
  }
}
