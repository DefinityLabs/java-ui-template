package org.definitylabs.web.template.javauitemplate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class JavaUiTemplateApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaUiTemplateApplication.class, args);
	}
}
