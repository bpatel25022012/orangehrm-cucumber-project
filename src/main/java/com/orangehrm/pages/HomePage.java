package com.orangehrm.pages;


import com.cucumber.listener.Reporter;
import com.orangehrm.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath ="//div[@id='logInPanelHeading']")
    WebElement _loginPanelText;

    @FindBy(id = "txtUsername")
    WebElement _usernameField;

    @FindBy(id = "txtPassword")
    WebElement _passwordField;

    @FindBy(id = "btnLogin")
    WebElement _loginBtn;

    @FindBy (id = "spanMessage")
    WebElement  _errorMessage;

    public String getLoginPanelText (){
        Reporter.addStepLog("Displaying Login Panel Link : " + _loginPanelText.toString());
        log.info("Displaying Login Panel Link : " + _loginPanelText.toString());
        return getTextFromElement(_loginPanelText);
    }
    public void enterUsernameField (String username){
        Reporter.addStepLog("Entering Username  : " + username +" "+ _usernameField.toString());
        sendTextToElement(_usernameField, username);
        log.info("Entering Username : " + username + " "+_usernameField.toString());
    }

    public void enterPasswordField (String password){
        Reporter.addStepLog("Entering Password  : " + password +" "+ _passwordField.toString());
        sendTextToElement(_passwordField, password);
        log.info("Entering Password : " + password + " "+_passwordField.toString());
    }

    public void clickonLoginBtn(){
        Reporter.addStepLog("Clicking on Login Button  : " + _loginBtn.toString());
        clickOnElement(_loginBtn );
        log.info("Clicking on Login Button : " + _loginBtn.toString());
    }

    public String getLoginErrorMessage() {
        Reporter.addStepLog("Displaying Login Error Message  :" + _errorMessage.toString());
        log.info("Displaying Login Error Message : " + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }
}
