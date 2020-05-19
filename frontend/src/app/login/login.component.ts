import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  successMessage = 'Login Successful'
  invalidLogin = false
  validLogin = false
  constructor(private router : Router, 
              private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService 

  ) {  }

  ngOnInit() {
  }

  // handleBasicAuthLogin(){
   
  //   this.basicAuthenticationService.executeAuthenitcationService(this.username,this.password)
  //   .subscribe(
  //     data =>{
  //       console.log(data)
  //       this.router.navigate(['welcome',this.username])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       console.log(error)
  //       this.invalidLogin = true
  //     }
  //   )   
  // }
  handleJWTAuthLogin(){
   
    this.basicAuthenticationService.executeJWTAuthenitcationService(this.username,this.password)
    .subscribe(
      data =>{
        console.log("Succesful Login")
        console.log(data)
        this.router.navigate(['welcome',this.username])
        // this.router.navigate(["/todos"]);
        this.invalidLogin = false
        this.validLogin = true
      },
      error => {
        console.log("Could not Login")
        console.log(error)
        this.invalidLogin = true
        this.validLogin = false
      }
    )   
  }
  // handleLogin(){
    
    
  //   if(this.hardcodedAuthenticationService.authenticate(this.username,this.password) ){
  //     this.router.navigate(['welcome',this.username])
  //     this.invalidLogin = false
  //   }
  //   else{
  //     this.invalidLogin = true
  //   }
  // }

}
