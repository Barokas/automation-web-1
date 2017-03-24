Feature: Test input fields on a page
    As a developer
    I want to be able to test input fields on a certain page

    Background:
        Given I open the site "/"
        Then  I expect that inputfield "demoApp.inputField" does not contain any text

    Scenario: Set the content of a input field
        When  I set "demoApp.inputFieldContentE" to the inputfield "demoApp.inputField"
        Then  I expect that inputfield "demoApp.inputField" does contain any text
        And   I expect that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentE"

    Scenario: Add content to a input field
        When  I set "demoApp.inputFieldContentE" to the inputfield "demoApp.inputField"
        Then  I expect that inputfield "demoApp.inputField" does contain any text
        When  I add "demoApp.inputFieldContentF" to the inputfield "demoApp.inputField"
        Then  I expect that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentEF"

    Scenario: Clear the content of a input field
        When  I set "demoApp.inputFieldContentEF" to the inputfield "demoApp.inputField"
        Then  I expect that inputfield "demoApp.inputField" does contain any text
        And   I expect that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentEF"
        When  I clear the inputfield "demoApp.inputField"
        Then  I expect that inputfield "demoApp.inputField" does not contain any text
