package com.niramay.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BaiscAuthenticationController {

	
	@GetMapping(path = "/basicauth")
	public AuthenticationBean sayHelloBean() {
		//throw new RuntimeException("Oops! Some error has occured");
		return new AuthenticationBean("You are authorized");
	}
	
	@GetMapping(path = "/hello-world-bean/path-variable/{name}")
	public AuthenticationBean HelloWorld(@PathVariable String name) {
		//throw new RuntimeException("Oops! Some error has occured");
		return new AuthenticationBean("Welcome " + name);
	}
	

}

