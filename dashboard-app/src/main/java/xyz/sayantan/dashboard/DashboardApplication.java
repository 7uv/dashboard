package xyz.sayantan.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DashboardApplication {
	public static final int TRUE_VAR = 1;
	public static void main(String[] args) {
		SpringApplication.run(DashboardApplication.class, args);
	}

	public int baseTest() {
		return TRUE_VAR;
	}

}
