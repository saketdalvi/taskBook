import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billing';
  message = 'Hello';
  colors = ['CYAN', 'GREEN', 'YELLOW'];
   myColor = '';
}

// import { Component } from '@angular/core';

// @Component({
//    selector: 'app-root',
//    templateUrl: './app.component.html'
// })
// export class AppComponent { 
//    txtsize = '25px';
//    colors = ['CYAN', 'GREEN', 'YELLOW'];
//    myColor = '';
// } 
