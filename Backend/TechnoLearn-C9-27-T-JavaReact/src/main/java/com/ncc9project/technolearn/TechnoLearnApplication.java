package com.ncc9project.technolearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class TechnoLearnApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechnoLearnApplication.class, args);
	}

}
