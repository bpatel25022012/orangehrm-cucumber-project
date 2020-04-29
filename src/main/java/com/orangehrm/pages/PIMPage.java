package com.orangehrm.pages;



import com.cucumber.listener.Reporter;
import com.orangehrm.utility.Utility;
import com.sun.org.apache.bcel.internal.generic.TABLESWITCH;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PIMPage extends Utility {
    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//b[contains(text(),'PIM')]")
    WebElement _pimLink;

    @FindBy(id = "empsearch_employee_name_empName")
    WebElement _empSearch;

    @FindBy(id = "searchBtn")
    WebElement _searchButton;

    @FindBy(xpath = "//a[contains(text(),'Fiona')]")
    WebElement _displayName;

    @FindBy(xpath = "//td[contains(text(),'No Records Found')]")
    WebElement _noRecordsMessage;

    public void clickonPIMlink() {
        Reporter.addStepLog("Clicking on PIM Link  : " + _pimLink.toString());
        clickOnElement(_pimLink);
        log.info("Clicking on PIM Link : " + _pimLink.toString());

    }

    public void enterEmployeeName(String str) {
        Reporter.addStepLog("Enter  Employee Name : " + str + " On Employee name Field " + _empSearch.toString());
//        waitUntilPresenceOfElementLocated((By)_empSearch,30 );
        clickOnElement(_empSearch);
        sendTextToElement(_empSearch, str);
        log.info("Enter Employee Name : " + str + " On Employee name Field " + _empSearch.toString());
    }

    public void clickOnSearchButton() {
        Reporter.addStepLog("Clicking on search button : " + _searchButton.toString());
        mouseHoverToElementAndClick(_searchButton);
        log.info("Clicking on PIM Link : " + _searchButton.toString());
    }

    public String getEmployeeName() {
        Reporter.addStepLog("Displaying Employing Name :" + _displayName.toString());
        log.info("Displaying Welcome AdminText : " + _displayName.toString());
        return getTextFromElement(_displayName);
    }

    public String noRecordsMessage() {
        Reporter.addStepLog("Displaying No records Message :" + _noRecordsMessage.toString());
        log.info("Displaying No records Message : " + _noRecordsMessage.toString());
        return getTextFromElement(_noRecordsMessage);
    }

}
