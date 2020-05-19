import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationBean } from '../basic-authentication.service';
import { API_URL } from 'src/app/app.constants';


export class HelloWorldBean{

  constructor( public message : string){}

}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { 
  }


  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8585/hello-world-bean');
    
  }
  executeHelloWorldBeanServiceWithPathVariable(name){

    // let basicAuthenticationString = this.createBasicAuthenticationHttpHeader()

    // let headers = new HttpHeaders({
    //     Authorization : basicAuthenticationString
    //   }
    // )
    return this.http.get<AuthenticationBean>(`${API_URL}/hello-world-bean/path-variable/${name}`);
    //{headers}
   
    
  }
  
  // createBasicAuthenticationHttpHeader(){
  //   let username = "sd"
  //   let password = "dummy"
  //   let basicAuthenticationString = "Basic " + btoa(username + ":"+ password)
  //   return basicAuthenticationString
  // }
}
