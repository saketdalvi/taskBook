import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  
  constructor(

    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date

  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message : string
  todos : Todo[]
  //  todos =
  //  [

  //   new Todo(1,'Eat', new Date(),false),
  //   new Todo(1,'Sleep',new Date(),false)

  //   // { id : 1, description : 'Eat'},
  //   // { id : 2, description : 'Sleep'},

  // ]
  constructor(

    private todoService : TodoDataService,
    private router : Router

  ) { }

  ngOnInit() {

    this.refreshTodos()
   
  }
  refreshTodos(){

    this.todoService.retrieveAllTodos('saket').subscribe(

      response => {
        console.log(response)
        this.todos = response

      }
    )
  }

  deleteTodo(id){
    console.log(`deleted todo ${id}`)
    this.todoService.deleteTodo('saket',id).subscribe(

      response => {
        console.log(response)       
        this.message = `Deleted todo ${id} successfully`
        this.refreshTodos()
      }
    )
    
  }

  updateTodo(id){
    console.log(`updated todo ${id}`)
    this.router.navigate(['todos',id])

  }

  addTodo(id){
    
    this.router.navigate(['todos',-1])

  }

}
