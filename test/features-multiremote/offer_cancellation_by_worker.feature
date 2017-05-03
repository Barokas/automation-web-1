Feature: Worker behaviour on Airtasker
  
Background: 
		Given Worker goes to site "/"
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		When  Worker logs "in" to "Airtasker"
		
Scenario: Worker makes an Offer and then cancels the Offer

		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"
		
		# 1. Details Screen
		
		And   Poster expects that element "homePage.postTaskTitle" becomes visible
		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "random.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "random.paragraph" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster expects that element "homePage.taskDetailsButton" becomes visible
		When  Poster clicks on the button "homePage.taskDetailsButton" and expects element "homePage.physicalOrOnline" to be visible

		# 2. Location Dialog
		
		Then  Poster expects that element "homePage.postTaskLocationInput" becomes visible
		When  Poster sets "profilePage.location" to the inputfield "homePage.postTaskLocationInput"
		And   Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.location"
		And   Poster pauses for 1000ms
		Then  Poster presses "keys.down"
		Then  Poster presses "keys.enter"
		Then  Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.locationResult"
		And   Poster clicks on the button "homePage.taskLocationButton" and expects element "homePage.paymentAmount" to be visible
		
		# 3. Budget Dialog
		
		When  Poster sets "taskDetails.amount" to the inputfield "homePage.paymentAmount"
		And   Poster clicks on the button "homePage.pricingButton"
		And   Poster expects that element "homePage.taskPostedSuccessNoLoader" has the class "homePage.taskPostedSuccessNoLoaderClass"
		And   Poster expects that element "homePage.postTaskForm" becomes visible
		When  Poster clicks on the button "homePage.allDoneButton"
		And   Poster expects that element "taskDetailsPage.dialog" does not have the class "taskDetailsPage.dialogDisplayedClass"
		Then  I capture task details of Poster

		Then  Poster expects that the currenturl is "global.taskURL"
		Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusAwaitingOffers"
		And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassDisabled"
		And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepAcceptedGreyed" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepPaidGreyed" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepReviewedGreyed" does not have the class "taskDetailsPage.classCompleted"

		Then  Worker expects the posted task to be available
		Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusMakeOffer"
		Then  Worker clicks on the button "taskDetailsPage.taskStatusButton"
		And   Worker expects that element "taskDetailsPage.dialog" becomes visible
		And   Worker expects that element "taskDetailsPage.offerHeader" contains the text "taskDetailsPage.offerMakeHeaderValue"
		And   Worker expects that element "taskDetailsPage.offerComment" becomes visible
		And   Worker sets "random.paragraph" to the inputfield "taskDetailsPage.offerComment"
		And   Worker clicks on the button "taskDetailsPage.offerContinueButton"

		# Preview Offer and Submit
		
		And   Worker expects that element "taskDetailsPage.offerPreviewDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.offerHeader" contains the text "taskDetailsPage.offerPreviewHeaderValue"
		And   Worker expects that element "taskDetailsPage.offerPreviewTaskPrice" contains the price "taskDetails.amount"
		# And   Worker expects that element "taskDetailsPage.offerPreviewTitle" contains the quotedText "taskDetails.title"
		And   Worker clicks on terms if presented
		And   Worker expects that element "taskDetailsPage.offerSubmitButton" has the class "taskDetailsPage.buttonClassEnabled"
		And   Worker clicks on the button "taskDetailsPage.offerSubmitButton"

		# Bid Submit Status Dialog
		
		And   Worker expects that element "taskDetailsPage.bidSubmitStatusDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.bidSubmitHeader" contains the text "taskDetailsPage.bidSuccessMessage"
		And   Worker clicks on the button "taskDetailsPage.bidSubmitCloseButton"

		# Poster Reviews Offers
		
		Then  Poster expects that the currenturl is "global.taskURL"
		And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
		Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusReviewOffer"
		
		# Worker Cancels Offer
			
		And   Worker expects that element "taskDetailsPage.cancelOfferCTA" becomes visible
		And   Worker clicks on the button "taskDetailsPage.cancelOfferCTA"

		And   Worker expects that element "taskDetailsPage.cancelOfferDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.cancelOfferHeader" contains the text "taskDetailsPage.cancelOfferHeaderMessage"
		And   Worker clicks on the button "taskDetailsPage.cancelOfferButton"

		# Verify Worker's Task Status

		Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusMakeOffer"
		And   Worker expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepAcceptedGreyedWorker" does not have the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepPaidGreyed" does not have the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepCompletedGreyedWorker" does not have the class "taskDetailsPage.classCompleted"

