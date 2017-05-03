Feature: Post an IKEA Task on Airtasker
  
Background: 
		Given I open the site "/"
		  
Scenario: A visitor should be able to Post a Task
    	Given I open Eyes for "IKEA: T1"
		Then  I expect that the currenturl is "homePage.root_URL"
		And   I expect that the title is "homePage.title"

		
		Then  I capture a screenshot for the "Home" page

		And   I expect that element "homePage.button" is visible
		And   I expect that element "homePage.button" contains the text "homePage.getStarted"

		Then  I expect that inputfield "homePage.postTaskLocationInput" does not contain any text
		And   I set "taskDetails.ikeaSuburb" to the inputfield "homePage.postTaskLocationInput"
		And   I pause for 1000ms
		Then  I press "keys.down"
		Then  I press "keys.enter"
		Then  I expect that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.ikeaSuburbResult"

		And   I click on the button "homePage.button"
		
		Then  I expect that inputfield "homePage.articleSearchField" does not contain any text
		And   I set "homePage.ikeaArticle" to the inputfield "homePage.articleSearchField"
		And   I pause for 1000ms
		
		Then  I capture a screenshot for the "Article Suggestions" page
		
		And   I expect that element "homePage.articleSuggestionQuantity" becomes visible
		And   I expect that inputfield "homePage.articleSuggestionQuantity" contains the value "1"
		And   I click on the button "homePage.articleSuggestionQuantityIncrement"
		And   I expect that inputfield "homePage.articleSuggestionQuantity" contains the value "2"
		And   I click on the button "homePage.articleSuggestionAdd"
		
		And   I expect that inputfield "homePage.articleListFinalQuantity" contains the value "2"
		And   I expect that inputfield "homePage.totalEstimatedBudget" contains the value "$70"
		And   I click on the button "homePage.ikeaContinue"
				
		Then  I expect that the currenturl is "homePage.ikeaSignupURL"

       	And   I expect that element "homePage.toggleLogin" becomes visible
		And   I click on the element "homePage.toggleLogin"

		And   I expect that element "homePage.emailInput" becomes visible
		When  I set "taskDetails.poster_email" to the inputfield "homePage.emailInput"
		And   I set "taskDetails.poster_password" to the inputfield "homePage.passwordInput"
		And   I click on the button "homePage.loginButton"
		And   I pause for 3000ms

		And   I expect that element "homePage.errorMessage" is not visible

		Then  I expect that element "homePage.ikeaPostTaskTitle" becomes visible
		And   I expect that the currenturl is "homePage.root_URL"
		And   I expect that inputfield "homePage.ikeaPostTaskTitle" contains the text "homePage.ikeaPostTaskTitleValue"
	
		And   I click on the button "homePage.ikeaContinueButton"

		And   I click on the element "homePage.ikeaDueToday"

		And   I click on the button "homePage.ikeaContinueButton"

		And   I expect that element "homePage.ikeaContinueButton" contains the text "homePage.getQuotes"

		And   I expect that inputfield "homePage.ikeaEstimatedBudget" contains the value "70"
		And   I click on the button "homePage.ikeaContinueButton"
		And   I expect that element "homePage.ikeaTaskPostedMessage" contains the text "homePage.ikeaTaskPostedMessageValue"

		Then  I capture a screenshot for the "Congratulations" page

		And   I click on the button "homePage.ikeaContinueButton"

		Then  I close Eyes

	
		