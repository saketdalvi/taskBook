import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

 

  constructor(private http : HttpClient) { }

  executeAuthenitcationService(username,password){

   
    let basicAuthenticationString = "Basic " + btoa(username + ":"+ password)
    

    let headers = new HttpHeaders({
        Authorization : basicAuthenticationString
      }
    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data => {

          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,basicAuthenticationString);
          return data;
        }

      )

    );
    
  }
  executeJWTAuthenitcationService(username,password){

   
    return this.http.post<any>(`${API_URL}/authenticate`,{
    username,
    password
    }
    )
    .pipe(
      map(
        data => {

          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }

      )

    );
    
  }
  
  createBasicAuthenticationHttpHeader(){
    let username = "sd"
    let password = "dummy"
    let basicAuthenticationString = "Basic " + btoa(username + ":"+ password)
    return basicAuthenticationString
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
    
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser)
      return sessionStorage.getItem(TOKEN);
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){

      sessionStorage.removeItem(AUTHENTICATED_USER);
      sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{

  constructor(
    public message : string
  ){
    
  }

}
