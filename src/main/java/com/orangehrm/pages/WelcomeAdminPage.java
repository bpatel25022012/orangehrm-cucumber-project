package com.orangehrm.pages;

import com.cucumber.listener.Reporter;
import com.orangehrm.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WelcomeAdminPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(WelcomeAdminPage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//a[@id='welcome']")
    WebElement _welcomeAdminText;

      public String getWelcomeAdminText() {
          Reporter.addStepLog("Displaying Welcome AdminText :" + _welcomeAdminText.toString());
        log.info("Displaying Welcome AdminText : " + _welcomeAdminText.toString());
        return getTextFromElement(_welcomeAdminText);
    }
}
