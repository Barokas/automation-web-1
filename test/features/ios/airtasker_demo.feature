Feature: Appium Demo for Airtasker iOS

 Scenario: Sign up and Post Task
		
	Given   I accept the alertbox
	Given   I expect that element "mainPage.signUpFlowButton" becomes visible
	When    I click on the button "mainPage.signUpFlowButton"

	Given   I expect that element "mainPage.emailInput" becomes visible
	And     I set "random.email" to the inputfield "mainPage.emailInput"

	Given   I expect that element "mainPage.passwordInput" becomes visible
	And     I set "random.password" to the inputfield "mainPage.passwordInput"

	Given   I expect that element "mainPage.signupButton" becomes visible
	When    I click on the button "mainPage.signupButton"

	And 	I pause for 3000ms