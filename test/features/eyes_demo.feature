Feature: Visual Regression on Airtasker Landing Pages
  As a user of WebdriverIO
  I should be able to use Eyes API
  to capture visual regressions

 Scenario: Eyes check on Landing Pages - Set 1
 	Given I open Eyes for "T2: A1 Landing Pages"
    And   I go to site "/about"
	Then  I capture a screenshot for the "About" page
	Given I go to site "/brand"
  	Then  I capture a screenshot for the "Brand" page
   	Given I go to site "/careers"
   	Then  I capture a screenshot for the "Careers" page
   	Given I go to site "/conduct"
   	Then  I capture a screenshot for the "Conduct" page
	

 Scenario: Eyes check on Landing Pages - Set 2
 	Given I open Eyes for "T2: A2 Landing Pages"
    And   I go to site "/team"
	Then  I capture a screenshot for the "Team" page
	Given I go to site "/how-it-works"
  	Then  I capture a screenshot for the "How It Works" page