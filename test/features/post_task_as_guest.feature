Feature: Post a Task on Airtasker
  
Background: 
		Given I open the site "/"
		# And   I pause for 3000ms
		# todo if user logged in, ensure logged out
		  
Scenario: A guest should be able to Post Task
    	# And   I pause for 10ms
		Then  I expect that the currenturl is "homePage.root_URL"
		And   I expect that the title is "homePage.title"
		
		And   I expect that element "homePage.postTaskLink" is visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"

		Then  I expect that the currenturl is "homePage.preLogin_postTask_URL"
		And   I expect that element "homePage.postTaskTitle" is visible
		# And   I pause for 3000ms
		
		Then  I expect that inputfield "homePage.postTaskTitle" does not contain any text
		And   I set "taskDetails.title" to the inputfield "homePage.postTaskTitle"
		And   I set "taskDetails.description" to the inputfield "homePage.postTaskDescriptionInput"
		And   I click on the button "homePage.taskDetailsButton"
		Then  I expect that the currenturl is "homePage.postTask_signUpContext_URL"
        And   I expect that element "homePage.toggleLogin" becomes visible

		# And   I pause for 5000ms
		And   I click on the link "homePage.loginLink"
		# And   I pause for 5000ms
		
		And   I expect that element "homePage.emailInput" becomes visible
		When  I set "taskDetails.poster_email" to the inputfield "homePage.emailInput"
		And   I set "taskDetails.poster_password" to the inputfield "homePage.passwordInput"
		And   I click on the button "homePage.loginButton"
		And   I pause for 3000ms

		# Check if we have Login issues
		# Then  I expect that element "homePage.dialog" is not visible
		And   I expect that element "homePage.errorMessage" is not visible
		And   I expect that the currenturl is "homePage.postTask_dashboard_URL"

		Then  I expect that element "homePage.postTaskTitle" is visible
		And   I expect that inputfield "homePage.postTaskTitle" contains the text "taskDetails.title"
		And   I expect that inputfield "homePage.postTaskDescriptionInput" contains the text "taskDetails.description"
		And   I click on the button "homePage.taskDetailsButton"
		And   I pause for 1000ms

		And   I expect that element "homePage.physicalOrOnline" becomes visible
		And   I click on the element "homePage.physicalOrOnline"
		And   I click on the button "homePage.taskLocationButton"
		And   I pause for 3000ms

		Then  I expect that element "homePage.paymentAmount" becomes visible
		# And   I pause for 1000ms
		When  I set "taskDetails.amount" to the inputfield "homePage.paymentAmount"
		And   I click on the button "homePage.pricingButton"
		And   I pause for 2000ms

		When  I click on the button "homePage.allDoneButton"
		And   I pause for 200ms

	
		