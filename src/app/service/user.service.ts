import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


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
    console.log(data) ;
    return this.http.post('http://localhost:8000/api/login',data)
  }

  logout(){
    this.authToken = null ;
    this.user = null ;
    localStorage.clear() ;
  }

  //LocalStorage UserData
  authToken: any ;
  user: any ;
  storeUserdata(token: any, user: any){
    localStorage.setItem('token',token) ;
    localStorage.setItem('_id', user) ;
    this.authToken = token ;
    this.user = user ;
  }

  getProfile(){
    // const token = localStorage.getItem('token') ;
    // this.authToken = token ;
    // let headers = new Headers() ;
    // headers.append('Authorization', this.authToken) ;
    let id: any = localStorage.getItem('_id') ;
    let data: any = {id: id, username: "qwerty"} ;
    return this.http.get('http://localhost:8000/api/profile',id)
  }
}
