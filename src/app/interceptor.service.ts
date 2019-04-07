import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( private injector : Injector) { }


  intercept(req, next){
    let authService = this.injector.get(AuthServiceService)
    let avoidUrl = [authService.userRegisterUrl, authService.url]
    if (req.url == authService.userRegisterUrl || req.url == authService.url){ 
      console.log("this is auth: " + req.url)

      return next.handle(req)
    } else {
      //send edited request
      console.log("this is not auth")

      let tokenizedReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
  }
 
}
 

