//package com.niramay.rest.webservices.restfulwebservices;
//
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//
//@ComponentScan
//public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		
//		http
//			.csrf().disable()
//			.authorizeRequests()
//			.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
//				.anyRequest().authenticated()
//				.and()
//			//.formLogin().and()
//			.httpBasic();
//	}
//
//}
