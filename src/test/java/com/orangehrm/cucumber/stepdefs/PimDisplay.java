package com.orangehrm.cucumber.stepdefs;



import com.orangehrm.pages.HomePage;
import com.orangehrm.pages.PIMPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class PimDisplay {
    @Given("^I am on Welcome Admin Page$")
    public void iAmOnWelcomeAdminPage() {
        new HomePage().enterUsernameField("Admin");
        new HomePage().enterPasswordField("admin123");
        new HomePage().clickonLoginBtn();
    }

    @When("^I select Employee Name \"([^\"]*)\"$")
    public void iSelectEmployeeName(String employeeName) {
        new PIMPage().clickonPIMlink();
        new PIMPage().enterEmployeeName(employeeName);
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new PIMPage().clickOnSearchButton();
    }


    @Then("^I am able to see the Name in the results$")
    public void iAmAbleToSeeTheNameInTheResults() {
        Assert.assertEquals(new PIMPage().getEmployeeName(), "Fiona");
    }

    @Then("^I get No Records Message in the results$")
    public void iGetNoRecordsMessageInTheResults() {
        Assert.assertEquals(new PIMPage().noRecordsMessage(), "No Records Found");
    }
}
