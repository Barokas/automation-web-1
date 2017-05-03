Feature: Poster Posts and Edits Task on Airtasker
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		
Scenario: Post Task and Edit Task
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"
		And   Poster expects that element "homePage.postTaskTitle" becomes visible

		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "taskDetails.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "taskDetails.description" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster clicks on the button "homePage.taskDetailsButton"
		
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
	 	And   Poster clicks on the element "homePage.physicalOrOnline"
		And   Poster jclicks on the element "homePage.dueToday"
		
		And   Poster clicks on the button "homePage.taskLocationButton"
		Then  Poster expects that element "homePage.paymentAmount" becomes visible
		And   Poster jclicks on the element "homePage.postTaskPayHourly"
		And   Poster jclicks on the element "homePage.postTaskPayTotal"
		When  Poster sets "taskDetails.amount" to the inputfield "homePage.paymentAmount"
		And   Poster clicks on the button "homePage.pricingButton"
		When  Poster clicks on the button "homePage.allDoneButton"

		# Poster Edits Title & Description

		And   Poster expects that element "taskDetailsPage.moreOptions" becomes visible
		And   Poster clicks on the element "taskDetailsPage.moreOptions"
		And   Poster expects that element "taskDetailsPage.editTask" becomes visible
		And   Poster clicks on the element "taskDetailsPage.editTask"

		And   Poster sets "random.title" to the inputfield "homePage.postTaskTitle"		
		And   Poster sets "random.paragraph" to the inputfield "homePage.postTaskDescriptionInput"	
		
		Then  Poster pushes "homePage.postTaskTitle"
		Then  Poster pushes "homePage.postTaskDescriptionInput"
		
		And   Poster clicks on the button "homePage.taskDetailsButton"
		
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
	 	And   Poster clicks on the element "homePage.physicalOrOnline"
		And   Poster jclicks on the element "homePage.dueToday"
		
		And   Poster clicks on the button "homePage.taskLocationButton"
		Then  Poster expects that element "homePage.paymentAmount" becomes visible
		And   Poster jclicks on the element "homePage.postTaskPayHourly"
		And   Poster jclicks on the element "homePage.postTaskPayTotal"
		
		When  Poster sets "random.price" to the inputfield "homePage.paymentAmount"
		Then  Poster pushes "homePage.paymentAmount"
		
		And   Poster clicks on the button "homePage.pricingButton"
		When  Poster clicks on the button "homePage.allDoneButton"
		
		# Poster Verifies Edits

		And   Poster expects that element "taskDetailsPage.moreOptions" becomes visible
		And   Poster clicks on the element "taskDetailsPage.moreOptions"
		And   Poster clicks on the element "taskDetailsPage.editTask"

		Then  Poster pops "homePage.postTaskTitle"
		Then  Poster pops "homePage.postTaskDescriptionInput"
		
		And   Poster clicks on the button "homePage.taskDetailsButton"
		
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
	 	And   Poster clicks on the element "homePage.physicalOrOnline"
		And   Poster jclicks on the element "homePage.dueToday"
		
		And   Poster clicks on the button "homePage.taskLocationButton"
		Then  Poster expects that element "homePage.paymentAmount" becomes visible
		
		Then  Poster pops "homePage.paymentAmount"
		Then  Poster clicks on the button "homePage.closeDialog"