import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthServiceService,
    private router : Router) { }

  ngOnInit() {
  }

    registerUserData = {}
  
  register(){
    return this.auth.register(this.registerUserData).subscribe(
      res => { 
      this.router.navigate(["/login"])
    },
    err => console.error(err)
    )
    
  }

}
