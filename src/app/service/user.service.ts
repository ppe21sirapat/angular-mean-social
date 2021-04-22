import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  // Http Headers
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json') ;

  createAccount(data: any){
    return this.http.post('http://localhost:8000/api/create-account',data)
  }

  loginCheck(data: any){
    return this.http.post('http://localhost:8000/api/login',data)
  }
}
