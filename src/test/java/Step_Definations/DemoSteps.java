package Step_Definations;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DemoSteps {

	@Given("user is on the Login Page")
	public void user_is_on_the_Login_Page() {
		System.out.println("Inside Step:-user is on the Login Page ");
		throw new io.cucumber.java.PendingException();
	}

	@When("user enters the username and password")
	public void user_enters_the_username_and_password() {
		System.out.println("Inside Step:- user enters the username and password");
		throw new io.cucumber.java.PendingException();
	}

	@When("Clicks the login button")
	public void clicks_the_login_button() {
		System.out.println("Inside Step:- Clicks the login button");
		throw new io.cucumber.java.PendingException();
	}

	@Then("the user is naviagted to the home page")
	public void the_user_is_naviagted_to_the_home_page() {
		System.out.println("Inside Step:- the user is naviagted to the home page");
		throw new io.cucumber.java.PendingException();
	}
}
