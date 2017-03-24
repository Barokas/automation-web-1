Feature: New Post Task Flow
  
Background: 
		# Given Worker goes to site "/"
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		# When  Worker logs "in" to "Airtasker"

@Pending
Scenario: Post a Once-Off Task
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"

		# 1. Details Screen
		And   Poster expects that element "homePage.postTaskTitle" becomes visible
		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "random.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "random.paragraph" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
		
		# Location
		
		Then  Poster expects that element "homePage.postTaskLocationInput" becomes visible
		When  Poster sets "profilePage.location" to the inputfield "homePage.postTaskLocationInput"
		And   Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.location"
		And   Poster pauses for 1000ms
		Then  Poster presses "keys.down"
		Then  Poster presses "keys.enter"
		Then  Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.locationResult"
		
		And   Poster expects that element "homePage.taskDetailsButton" becomes visible

		# 2. Due Date Screen
		When  Poster clicks on the button "homePage.taskDetailsButton" and expects element "homePage.dueDateSelection" to be visible
		And   Poster expects that the attribute "value" from element "homePage.onceOffTask" is "true"
		And   Poster jclicks on the element "homePage.onceOffTask"
		And   Poster clicks on the element "homePage.dueDateSelection"
		And   Poster picks any date from the datepicker
		And   Poster clicks on the button "homePage.recurringDateButton" and expects element "homePage.paymentAmount" to be visible

		# 3. Budget Screen
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
		And   Poster expects that element "taskDetailsPage.stepAccepted" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepPaid" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"
	
	
	
	
	
	
@Pending
Scenario: Post a Weekly Recurring Task that never ends
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"

		# 1. Details Screen
		And   Poster expects that element "homePage.postTaskTitle" becomes visible
		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "random.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "random.paragraph" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
		
		# Location
		
		Then  Poster expects that element "homePage.postTaskLocationInput" becomes visible
		When  Poster sets "profilePage.location" to the inputfield "homePage.postTaskLocationInput"
		And   Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.location"
		And   Poster pauses for 1000ms
		Then  Poster presses "keys.down"
		Then  Poster presses "keys.enter"
		Then  Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.locationResult"
		
		And   Poster expects that element "homePage.taskDetailsButton" becomes visible

		# 2. Due Date Screen
		When  Poster clicks on the button "homePage.taskDetailsButton" and expects element "homePage.dueDateSelection" to be visible
		And   Poster expects that the attribute "value" from element "homePage.onceOffTask" is "true"
		And   Poster expects that element "homePage.onceOffTask" is selected
		And   Poster jclicks on the element "homePage.recurringTask"
		And   Poster pauses for 1000ms
		And   Poster clicks on the element "homePage.dueDateSelection"
		And   Poster picks any date from the datepicker
		Then  Poster expects that element "homePage.recurringInterval_2_weeks" is selected
		When  Poster selects the option with the value "1w" for element "homePage.recurringInterval"
		Then  Poster expects that element "homePage.neverEndingTask" is selected
		And   Poster clicks on the button "homePage.recurringDateButton" and expects element "homePage.paymentAmount" to be visible

		# 3. Budget Screen
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
		And   Poster expects that element "taskDetailsPage.stepAccepted" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepPaid" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"









# @Pending
Scenario: Post a Weekly Recurring Task that ends some day
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.postTaskLink" becomes visible
		And   Poster clicks on the button "homePage.postTaskLink"
		Then  Poster expects that the currenturl is "homePage.postLogin_postTask_URL"

		# 1. Details Screen
		And   Poster expects that element "homePage.postTaskTitle" becomes visible
		Then  Poster expects that inputfield "homePage.postTaskTitle" does not contain any text
		And   Poster sets "random.title" to the inputfield "homePage.postTaskTitle"
		And   Poster sets "random.paragraph" to the inputfield "homePage.postTaskDescriptionInput"
		And   Poster expects that element "homePage.physicalOrOnline" becomes visible
		
		# Location
		
		Then  Poster expects that element "homePage.postTaskLocationInput" becomes visible
		When  Poster sets "profilePage.location" to the inputfield "homePage.postTaskLocationInput"
		And   Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.location"
		And   Poster pauses for 1000ms
		Then  Poster presses "keys.down"
		Then  Poster presses "keys.enter"
		Then  Poster expects that inputfield "homePage.postTaskLocationInput" contains the text "profilePage.locationResult"
		
		And   Poster expects that element "homePage.taskDetailsButton" becomes visible

		# 2. Due Date Screen
		When  Poster clicks on the button "homePage.taskDetailsButton" and expects element "homePage.dueDateSelection" to be visible
		And   Poster expects that the attribute "value" from element "homePage.onceOffTask" is "true"
		And   Poster jclicks on the element "homePage.recurringTask"
		And   Poster pauses for 1000ms
		And   Poster clicks on the element "homePage.dueDateSelection"
		And   Poster picks any date from the datepicker
		Then  Poster expects that element "homePage.recurringInterval_2_weeks" is selected
		When  Poster selects the option with the value "1w" for element "homePage.recurringInterval"
		Then  Poster expects that element "homePage.neverEndingTask" is selected
		And   Poster jclicks on the element "homePage.recurringEndingDate"
		And   Poster clicks on the element "homePage.recurringEndDateSelection"
		And   Poster picks any date from the datepicker
		And   Poster clicks on the button "homePage.recurringDateButton" and expects element "homePage.paymentAmount" to be visible

		# 3. Budget Screen
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
		And   Poster expects that element "taskDetailsPage.stepAccepted" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepPaid" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"




# 		#####
#
#
# 		# Then  Worker expects the posted task to be available
# 		# Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusMakeOffer"
# 		# Then  Worker clicks on the button "taskDetailsPage.taskStatusButton"
# 		# And   Worker expects that element "taskDetailsPage.dialog" becomes visible
# 		# And   Worker expects that element "taskDetailsPage.offerHeader" contains the text "taskDetailsPage.offerMakeHeaderValue"
# 		# And   Worker expects that element "taskDetailsPage.offerComment" becomes visible
# 		# And   Worker sets "random.paragraph" to the inputfield "taskDetailsPage.offerComment"
# 		# And   Worker clicks on the button "taskDetailsPage.offerContinueButton"
# 		#
# 		# # Preview Offer and Submit
# 		# And   Worker expects that element "taskDetailsPage.offerPreviewDialog" becomes visible
# 		# And   Worker expects that element "taskDetailsPage.offerHeader" contains the text "taskDetailsPage.offerPreviewHeaderValue"
# 		# And   Worker expects that element "taskDetailsPage.offerPreviewTaskPrice" contains the price "taskDetails.amount"
# 		# # And   Worker expects that element "taskDetailsPage.offerPreviewTitle" contains the quotedText "taskDetails.title"
# 		# And   Worker clicks on terms if presented
# 		# And   Worker expects that element "taskDetailsPage.offerSubmitButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# And   Worker clicks on the button "taskDetailsPage.offerSubmitButton"
# 		#
# 		# # Bid Submit Status Dialog
# 		# And   Worker expects that element "taskDetailsPage.bidSubmitStatusDialog" becomes visible
# 		# # And   Worker expects that element "taskDetailsPage.bidSubmitHeader" contains the text "taskDetailsPage.bidSuccessMessage"
# 		# And   Worker clicks on the button "taskDetailsPage.bidSubmitCloseButton"
# 		#
# 		# # Poster Reviews Offers
# 		# Then  Poster expects that the currenturl is "global.taskURL"
# 		# And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusReviewOffer"
# 		# And   Poster clicks on the button "taskDetailsPage.taskStatusButton"
# 		#
# 		# # Poster Accepts Offer
# 		# And   Poster expects that element "taskDetailsPage.taskAssignDialog" becomes visible
# 		# And   Poster expects that element "taskDetailsPage.taskAssignHeader" contains the text "taskDetailsPage.taskAssignHeaderMessage"
# 		# And   Poster expects that element "taskDetailsPage.taskAssignAcceptOfferButton" becomes visible
# 		# And   Poster clicks on the button "taskDetailsPage.taskAssignAcceptOfferButton"
# 		# And   Poster expects that element "taskDetailsPage.taskAssignAddFundsDialog" becomes visible
# 		# And   Poster expects that element "taskDetailsPage.taskAssignAddFundsHeader" contains the text "taskDetailsPage.taskAssignAddFundsHeaderMessage"
# 		# And   Poster clicks on terms if presented
# 		# And   Poster expects that element "taskDetailsPage.taskAssignAddFundsAcceptButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# And   Poster clicks on the button "taskDetailsPage.taskAssignAddFundsAcceptButton"
# 		# And   Poster waits for element "taskDetailsPage.taskAssignSuccessNoLoader" to appear
# 		# And   Poster expects that element "taskDetailsPage.errorDialog" is not visible
# 		# And   Poster expects that element "taskDetailsPage.taskAssignSuccessDialog" becomes visible
# 		# And   Poster expects that element "taskDetailsPage.taskAssignSuccessHeader" contains the text "taskDetailsPage.taskAssignSuccessHeaderMessage"
# 		# And   Poster expects that element "taskDetailsPage.congratsScreenSendMessageCTAButton" becomes visible
# 		# And   Poster expects that element "taskDetailsPage.congratsScreenCallCTAButton" becomes visible
# 		# And   Poster clicks on the button "taskDetailsPage.congratsScreenClose"
# 		#
# 		# And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
# 		# And   Poster expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
# 		# Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusPrivateMessage"
# 		# And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		#
# 		# # Worker Requests Payment
# 		#
# 		# Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusRequestPayment"
# 		# Then  Worker clicks on the button "taskDetailsPage.taskStatusButton"
# 		# And   Worker expects that element "taskDetailsPage.requestPaymentDialog" becomes visible
# 		# And   Worker expects that element "taskDetailsPage.requestPaymentHeader" contains the text "taskDetailsPage.requestPaymentHeaderMessage"
# 		# And   Worker expects that element "taskDetailsPage.requestPaymentTaskPrice" contains the price "taskDetails.amount"
# 		# And   Worker clicks on the button "taskDetailsPage.requestPaymentButton"
# 		#
# 		# # # Request Payment Status Dialog
# 		# And   Worker waits for element "taskDetailsPage.requestPaymentSuccessNoLoader" to appear
# 		# And   Worker expects that element "taskDetailsPage.requestPaymentStatusDialog" becomes visible
# 		#
# 		# And   Worker expects that element "taskDetailsPage.requestPaymentStatusHeader" contains the text "taskDetailsPage.requestPaymentSuccessMessage"
# 		# And   Worker clicks on the button "taskDetailsPage.requestPaymentStatusCloseButton"
# 		# # todo: taskURL will be different from now on: change my-tasks to tasks
# 		# # Then  Worker expects that the currenturl is "global.taskURL"
# 		# Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusAwaitingPayment"
# 		# And   Worker expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassDisabled"
# 		# And   Worker expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepPaid" does not have the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"
# 		#
# 		# # Poster Releases Payment
# 		# # Then  Poster expects that the currenturl is "global.taskURL"
# 		# And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusReleasePayment"
# 		# And   Poster clicks on the button "taskDetailsPage.taskStatusButton"
# 		#
# 		# And   Poster expects that element "taskDetailsPage.confirmReleaseDialog" becomes visible
# 		# And   Poster expects that element "taskDetailsPage.confirmReleaseHeader" contains the text "taskDetailsPage.confirmReleaseHeaderMessage"
# 		# And   Poster expects that element "taskDetailsPage.confirmReleaseTaskPrice" contains the price "taskDetails.amount"
# 		# # And   Poster expects that element "taskDetailsPage.confirmReleaseTaskTitle" contains the quotedText "taskDetails.title"
# 		# And   Poster clicks on the button "taskDetailsPage.confirmReleaseFundsButton"
# 		#
# 		# And   Poster expects that element "taskDetailsPage.errorDialog" is not visible
# 		# # todo: handle retry (go back and click on release again)
# 		# And   Poster waits for element "taskDetailsPage.writeReviewDialogNoLoader" to appear
# 		# And   Poster expects that element "taskDetailsPage.writeReviewDialog" becomes visible
# 		#
# 		# # Poster sees the Write Review Dialog
# 		# # todo: current url verification /tasks/<taskslug>/write-review/<taskslug>/
# 		#
# 		# And   Poster expects that element "taskDetailsPage.writeReviewDialogHeader" contains the text "taskDetailsPage.writeReviewHeaderMessage"
# 		# # Then  Poster expects that inputfield "homePage.writeReviewInput" does not contain any text
# 		# And   Poster clicks on the button "taskDetailsPage.writeReviewCancelButton"
# 		#
# 		# # Then  Poster expects that the currenturl is "global.taskURL"
# 		# Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusLeaveReview"
# 		# And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
# 		# And   Poster expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
# 		# And   Poster expects that element "taskDetailsPage.stepPaid" has the class "taskDetailsPage.classCompleted"
# 		# And   Poster expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"
# 		#
# 		# # Then  Worker expects that the currenturl is "global.taskURL"
# 		# Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusLeaveReview"
# 		# And   Worker expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
# 		# And   Worker expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepPaid" has the class "taskDetailsPage.classCompleted"
# 		# And   Worker expects that element "taskDetailsPage.stepReviewed" does not have the class "taskDetailsPage.classCompleted"
#
# 		# When  Worker logs "out" of "Airtasker"
# 		# When  Poster logs "out" of "Airtasker"