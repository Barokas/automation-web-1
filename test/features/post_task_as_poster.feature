Feature: Poster Posts a Task on Airtasker
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		
Scenario: Post and Claim
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"
		And   Poster expects that element "homePage.postTaskTitle" becomes visible

		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "taskDetails.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "taskDetails.description" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster clicks on the button "homePage.taskDetailsButton"
		
		# Then  Poster expects that element "homePage.formLocationInput" becomes visible
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
	 	And   Poster clicks on the element "homePage.physicalOrOnline"
		And   Poster clicks on the button "homePage.taskLocationButton"
		
		Then  Poster expects that element "homePage.paymentAmount" becomes visible
		When  Poster sets "taskDetails.amount" to the inputfield "homePage.paymentAmount"
		And   Poster clicks on the button "homePage.pricingButton"

		When  Poster clicks on the button "homePage.allDoneButton"
		# And   I pause for 6000ms
		Then  I capture task details of Poster
		When  Poster logs "out" of "Airtasker"