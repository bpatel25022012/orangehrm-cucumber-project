@Login
Feature: Login functionality
  As a user,I want to login to orangehrm website

  Scenario: User should login successfully with valid credentials
    Given I am on Home page
    When I enter username "Admin"
    And I enter password "admin123"
    And I click on login button
    Then I should login successfully

  Scenario: User should not login successfully with in valid credentials
    Given I am on Home page
    When I enter username "Admin"
    And I enter password "admin1236789"
    And I click on login button
    Then I should not login successfully

