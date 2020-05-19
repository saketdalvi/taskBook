import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private htttp : HttpClient

  ) { }


  retrieveAllTodos(username){

    return this.htttp.get<Todo[]>(`${API_URL}/users/${username}/todos`);

  }

  deleteTodo(username,id){

    return this.htttp.delete(`${API_URL}/users/${username}/todos/${id}`);

  }

  retrieveTodo(username,id){

    
    return this.htttp.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);

  }

  updateTodo(username,id,todo){

    return this.htttp.put(`${API_URL}/users/${username}/todos/${id}`,todo);

  }

  createTodo(username,todo){

    return this.htttp.post(`${API_URL}/users/${username}/todos`,todo);

  }
 
}