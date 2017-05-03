Feature: Poster Copies a Task on Airtasker
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		
Scenario: Post Task and Copy Task
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster expects that element "homePage.browseTasksLink" becomes visible
		And   Poster clicks on the button "homePage.browseTasksLink"
		Then  Poster expects that the currenturl is "homePage.browseTasks_URL"
		And   Poster expects that element "homePage.openTasksLink" becomes visible
		
		And   Poster clicks on the button "homePage.openTasksLink"
		
		# TODO avoid the pause here
		And   Poster pauses for 5000ms
		And   Poster expects that element "homePage.mainLoader" has the class "homePage.noLoaderClass"
		
		Then  Poster navigates to the first task
		
		# Poster Copies Task
		
		And   Poster expects that element "taskDetailsPage.moreOptions" becomes visible	
		And   Poster clicks on the element "taskDetailsPage.moreOptions"
		And   Poster expects that element "taskDetailsPage.copyTask" becomes visible
		And   Poster clicks on the element "taskDetailsPage.copyTask"

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
		
		# Poster Verifies Copy
		# TODO verify if slug changes

		And   Poster expects that element "taskDetailsPage.moreOptions" becomes visible
		And   Poster clicks on the element "taskDetailsPage.moreOptions"
		And   Poster expects that element "taskDetailsPage.editTask" becomes visible
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