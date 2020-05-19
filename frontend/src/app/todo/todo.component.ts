import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number
  todo : Todo
  dueDate : Date
  priority : string 
  done : boolean = false

  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.todo =  new Todo(this.id,'',false,new Date());
    if(this.id != -1){
      this.todoService.retrieveTodo('saket',this.id).subscribe(

        data => this.todo = data
      )

    }
    
  }

  saveTodo(){

    if(this.id == -1){
      this.todoService.createTodo('saket',this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
          this.done = true
        }
      )
    }
    else{
      this.todoService.updateTodo('saket',this.id,this.todo).subscribe(

        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
  
      )

    }
    


  }

 

}


// import { Directive, ElementRef } from '@angular/core';

// @Directive({ 
//      selector: '[myRed]' 
// })
// export class MyRedDirective implements OnInit {

//     color : string = 'azure'
//     //  public elRef: ElementRef
//     constructor(public elRef: ElementRef) {
//       // elRef.nativeElement.style.backgroundColor = this.color;
//       //  elRef.nativeElement.style.width = '1000px';
//       //  elRef.nativeElement.style.height = '1000px';
//     }
//   ngOnInit(): void {
//     this.temp();
//   }
//      public temp(){
//        console.log(this.color);
       
//       this.elRef.nativeElement.style.backgroundColor = this.color;
//      }
// }

// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({ 
//      selector: '[dynamicColor]' 
// })
// export class DynamicColorDirective {

//     x = 'red';
//     colors = ['CYAN', 'GREEN', 'YELLOW'];
//    myColor = '';
//    @Input('dynamicColor') dynamicColor: string;
//    @Input() defaultValue: string;
//    constructor(private elRef: ElementRef) {
//    }
//   //  @HostListener('mouseover') onMouseOver() {
//   //    this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
//   //  }
//   //  @HostListener('mouseleave') onMouseLeave() {
//   //    this.changeBackgroundColor('white');
//   //  }
//    public changeBackgroundColor() {
//      this.elRef.nativeElement.style.backgroundColor = this.x;
//    }  
// }

// color: string