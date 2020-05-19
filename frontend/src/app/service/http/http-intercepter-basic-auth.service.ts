import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor( 
    private basicAuthenticationService :BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    
   
      // let username = "sd"
      // let password = "dummy"
      // let basicAuthenticationString = "Basic " + btoa(username + ":"+ password)
      let basicAuthenticationString =this.basicAuthenticationService.getAuthenticatedToken()
      let username = this.basicAuthenticationService.getAuthenticatedUser()
      if(basicAuthenticationString && username){
        request = request.clone({

          setHeaders : {
            Authorization : basicAuthenticationString
          }
  
        }
        )
      }
      
      return next.handle(request);
    
  }
}
