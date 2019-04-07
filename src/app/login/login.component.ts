import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService,
    private router : Router) { }

  ngOnInit() {
  }

  loginUserData = {}

  login(){
    console.log("test?");
    return this.auth.login(this.loginUserData).subscribe(
      res => {
        console.log("work");
        localStorage.setItem("token", res.token);
        this.router.navigate(["/posts"]);
      }
    )
  }
}
