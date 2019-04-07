import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
    private router : Router) { }

  url = "http://localhost:8080/auth/signin"
  userRegisterUrl = "http://localhost:8080/admin/signup"


  //send request to log in
  login(loginCredentials){
    return this.http.post<any>(this.url, loginCredentials);
  }

  //checks if user is logged in 
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  register(credentials){
    return this.http.post<any>(this.userRegisterUrl,credentials);
  }

  logoutUser(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  
}
