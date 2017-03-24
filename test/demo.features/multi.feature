Feature: The multi remote on cucumber
  
    Background:
        Given I open the site "/"

    Scenario: Test if the demo app does not have the title "Google"
        Given the title is not "Google"
        And   the page url is not "https://www.google.com/"
        # Then  I expect that element "h1" not contains the text "Google"
