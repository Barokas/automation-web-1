Feature: Verify CTA works on Airtasker Landing Pages

Scenario: Category Pages

		Given I open the site "/home-and-garden"
		And   I expect that element "homePage.postTaskLink" is visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"
		Then  I expect that element "homePage.taskDetailsButton" is visible

Scenario: Cleaning Landing Page

		Given I open the site "/home-and-garden/residential-home-cleaning/"
		And   I expect that element "homePage.postTaskLink" is visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"
		Then  I expect that element "homePage.templateContinueButton" is visible

Scenario: Handyman Landing Page

		Given I open the site "/tradesman/handyman-help/"
		And   I expect that element "homePage.postTaskLink" is visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"
		Then  I expect that element "homePage.taskDetailsButton" is visible
	
Scenario: Conventional Landing Page

		Given I open the site "/computer-it-web/computer-and-it-support/"		
		And   I expect that element "homePage.postTaskLink" is visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"
		Then  I expect that element "homePage.taskDetailsButton" is visible