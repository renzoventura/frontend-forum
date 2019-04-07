import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard  {

  constructor(private authservice : AuthServiceService, private router : Router){}

  canActivate(): boolean{
    if (this.authservice.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }

}
