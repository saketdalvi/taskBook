package com.niramay.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long>{
	
	List<Todo> findByUsername(String username);

}
