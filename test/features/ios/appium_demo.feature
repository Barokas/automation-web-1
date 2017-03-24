Feature: Appium Demo for Airtasker iOS

 Scenario: Submit form and display output
	Given   I expect that element "mainPage.hamburgerMenu" becomes visible
	When    I click on the button "mainPage.hamburgerMenu"
	And     I expect that element "mainPage.formMenu" becomes visible
	When    I click on the button "mainPage.formMenu"
	
	And     I set "mainPage.FirstName" to the inputfield "mainPage.FirstNameField"
	And     I set "mainPage.LastName" to the inputfield "mainPage.LastNameField"
	
	And     I expect that element "mainPage.calculateButton" is visible
	And     I click on the button "mainPage.calculateButton"
	Then    I expect that element "mainPage.Result" contains the text "mainPage.ResultName"