import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from 'util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMesssageFromService : string

  constructor(
    private route: ActivatedRoute,
    private service : WelcomeDataService
    ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(

      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error) 
    );
  }

  getWelcomeMessageWithParameter(){
    
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(

      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error) 
    );
  }

  handleErrorResponse(error){
    console.log(error)
    this.welcomeMesssageFromService = error.error.message
  }

  handleSuccesfulResponse(response){

    this.welcomeMesssageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

}
