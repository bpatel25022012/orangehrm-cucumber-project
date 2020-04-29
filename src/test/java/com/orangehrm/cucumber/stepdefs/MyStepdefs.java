package com.orangehrm.cucumber.stepdefs;


import com.orangehrm.pages.HomePage;
import com.orangehrm.pages.WelcomeAdminPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new HomePage().enterUsernameField(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new HomePage().enterPasswordField(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new HomePage().clickonLoginBtn();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals(new WelcomeAdminPage().getWelcomeAdminText(), "Welcome Admin");
    }

    @Then("^I should not login successfully$")
    public void iShouldNotLoginSuccessfully() {
        Assert.assertEquals(new HomePage().getLoginErrorMessage(),"Invalid credentials");
    }
}
