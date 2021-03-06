$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a user,I want to login to orangehrm website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 20934372500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 383354700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 8326081000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 392260200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12402764400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 209825800,
  "status": "passed"
});
formatter.after({
  "duration": 767856100,
  "status": "passed"
});
formatter.before({
  "duration": 17182874700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should not login successfully with in valid credentials",
  "description": "",
  "id": "login-functionality;user-should-not-login-successfully-with-in-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"admin1236789\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 64200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 12985610300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1236789",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 16441043300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4041531500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 121332300,
  "status": "passed"
});
formatter.after({
  "duration": 765294800,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrm/resources/featurefile/pim.feature");
formatter.feature({
  "line": 3,
  "name": "Employee Records Display",
  "description": "As a user I am able to see the Employee information on PIM Page",
  "id": "employee-records-display",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Employee"
    }
  ]
});
formatter.before({
  "duration": 15353379000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to view valid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-be-able-to-view-valid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select Employee Name \" Fiona Grace\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am able to see the Name in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimDisplay.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 12842879900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Fiona Grace",
      "offset": 24
    }
  ],
  "location": "PimDisplay.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 1627738700,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iClickOnSearchButton()"
});
formatter.result({
  "duration": 744774200,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iAmAbleToSeeTheNameInTheResults()"
});
formatter.result({
  "duration": 111496400,
  "status": "passed"
});
formatter.after({
  "duration": 722077600,
  "status": "passed"
});
formatter.before({
  "duration": 16795167500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should not be able to view Invalid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-not-be-able-to-view-invalid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select Employee Name \" Arvind Gajraj Prabhudeva\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get No Records Message in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimDisplay.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 61021016300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Arvind Gajraj Prabhudeva",
      "offset": 24
    }
  ],
  "location": "PimDisplay.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 32758084900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#empsearch_employee_name_empName\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANUSHK\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir1...}, goog:chromeOptions: {debuggerAddress: localhost:59077}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8ff5b0efd40c57f0cf90b77d2e383b2c\n*** Element info: {Using\u003did, value\u003dempsearch_employee_name_empName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.orangehrm.utility.Utility.clickOnElement(Utility.java:42)\r\n\tat com.orangehrm.pages.PIMPage.enterEmployeeName(PIMPage.java:46)\r\n\tat com.orangehrm.cucumber.stepdefs.PimDisplay.iSelectEmployeeName(PimDisplay.java:24)\r\n\tat ✽.When I select Employee Name \" Arvind Gajraj Prabhudeva\"(src/test/java/com/orangehrm/resources/featurefile/pim.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PimDisplay.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PimDisplay.iGetNoRecordsMessageInTheResults()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1448816100,
  "status": "passed"
});
});