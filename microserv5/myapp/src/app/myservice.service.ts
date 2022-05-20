
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://localhost:8000/';


@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient) { }

  getBills() {
    return this.http.get('/api/billsReimbursement');
  }
  // getCertification(id: any) {
  //   return this.http.get(`${baseUrl}certifications/${id}`);
  // }
  // getFeedback(id: any) {
  //   return this.http.get(`${baseUrl}feedback/${id}`);
  // }

}
