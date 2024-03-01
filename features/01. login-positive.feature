@digital-skola @login
Feature: Swag Labs - Login - Positive
  
  @positive
  Scenario: As a standard_user, I want to log in succesfully
    Given Elieta is on the login page
    When Elieta login with "standard_user" credential
    And Elieta login with "problem_user" credential
    And Elieta login with "performance_glitch_user" credential
    And Elieta login with "error_user" credential
    And Elieta login with "visual_user" credential
    Then Elieta should see home page