package com.niramay.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service 
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static long idCounter;
	
	static {
		
		todos.add(new Todo(++idCounter,"saket","Client Meeting",new Date(),false));
		todos.add(new Todo(++idCounter,"saket","Learn Kotlin",new Date(),false));
		todos.add(new Todo(++idCounter,"saket","Launch Website",new Date(),false));
				
	}
	
	public List<Todo> findAll(){
		
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findByID(id);
		
		if(todo == null) return null;
		todos.remove(todo);
		
		return todo;
	}

	public Todo findByID(long id) {
		
		for(Todo todo: todos) {
			if(todo.getId() == id)
				return todo;
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		
		if(todo.getId() == -1 || todo.getId() == 0 ) {
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
		
	}
	
}
