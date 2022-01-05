import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "";

  constructor(public http: HttpClient) { 
  }

  getCustomer(): Observable<any> {  
    this.url = 'https://localhost:44356/api/Customers/GetCustomer';  
    return this.http.get(this.url);  
  }  
  getAllCustomerCount(): Observable<any> {  
    this.url = 'https://localhost:44356/api/Customers/CustomerExists';  
    return this.http.get(this.url);  
  }  
}
