Feature: Task Cancellation by Poster
  
Background: 
		Given Worker goes to site "/"
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		When  Worker logs "in" to "Airtasker"
		
Scenario: Poster Posts a Task, Worker Offer gets Accepted, Then Poster Cancels the Task

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
		And   Poster clicks on the button "taskDetailsPage.taskStatusButton"

		# Poster Accepts Offer
		
		And   Poster expects that element "taskDetailsPage.taskAssignDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.taskAssignHeader" contains the text "taskDetailsPage.taskAssignHeaderMessage"
		And   Poster expects that element "taskDetailsPage.taskAssignAcceptOfferButton" becomes visible
		And   Poster clicks on the button "taskDetailsPage.taskAssignAcceptOfferButton"
		And   Poster expects that element "taskDetailsPage.taskAssignAddFundsDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.taskAssignAddFundsHeader" contains the text "taskDetailsPage.taskAssignAddFundsHeaderMessage"
		And   Poster clicks on terms if presented
		And   Poster expects that element "taskDetailsPage.taskAssignAddFundsAcceptButton" has the class "taskDetailsPage.buttonClassEnabled"
		And   Poster clicks on the button "taskDetailsPage.taskAssignAddFundsAcceptButton"
		And   Poster waits for element "taskDetailsPage.taskAssignSuccessNoLoader" to appear
		
		# Keep Worker Alive (Browserstack won't idle for more than 90s)
		And   Worker reloads current page
		
		And   Poster expects that element "taskDetailsPage.errorDialog" is not visible
		And   Poster expects that element "taskDetailsPage.taskAssignSuccessDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.taskAssignSuccessHeader" contains the text "taskDetailsPage.taskAssignSuccessHeaderMessage"
		And   Poster expects that element "taskDetailsPage.congratsScreenSendMessageCTAButton" becomes visible
		And   Poster expects that element "taskDetailsPage.congratsScreenCallCTAButton" becomes visible
		And   Poster clicks on the button "taskDetailsPage.congratsScreenClose"

		And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
		Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusPrivateMessage"
		And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
		
		# Poster Cancels Task
		
		And   Poster clicks on the element "taskDetailsPage.moreOptions"
		And   Poster clicks on the element "taskDetailsPage.cancelTask"
		And   Poster expects that element "taskDetailsPage.cancelTaskDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.cancelTaskDialogHeader" contains the text "taskDetailsPage.cancelTaskHeaderMessage"
		And   Poster clicks on the button "taskDetailsPage.submitButton"

		And   Poster expects that element "taskDetailsPage.cancellationReasonDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.cancellationReasonHeader" contains the text "taskDetailsPage.cancellationReasonHeaderMessage"
		
		# TODO save the reason and verify later
		And   Poster jclicks on the button "taskDetailsPage.accidentallyAcceptedOffer"
		
		And   Poster clicks on the button "taskDetailsPage.submitButton"
		
		And   Poster expects that element "taskDetailsPage.cancellationSubmittedDialog" becomes visible
		And   Poster expects that element "taskDetailsPage.cancellationSubmittedHeader" contains the text "taskDetailsPage.cancellationSubmittedHeaderMessage"
		And   Poster clicks on the button "taskDetailsPage.submitButton"
		
		And   Poster expects that element "taskDetailsPage.cancellationNotificationAlertError" becomes visible
		And   Poster expects that element "taskDetailsPage.cancellationAlertCTA" becomes visible
		Then  Poster expects that element "taskDetailsPage.cancellationAlertCTA" contains the text "taskDetailsPage.removeCancellationCTAText"

		# Worker gets Alert
		
		And   Worker expects that element "taskDetailsPage.cancellationNotificationAlertError" becomes visible
		And   Worker expects that element "taskDetailsPage.cancellationAlertCTA" becomes visible
		Then  Worker expects that element "taskDetailsPage.cancellationAlertCTA" contains the text "taskDetailsPage.viewCancellationCTAText"
		
		# Verify Poster's Task Status
		
		And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepPaidGreyed" does not have the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepReviewedGreyed" does not have the class "taskDetailsPage.classCompleted"

		Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusPrivateMessage"
		And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
		
		# Verify Worker's Task Status
		
		And   Worker expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepPaidGreyed" does not have the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepReviewedGreyed" does not have the class "taskDetailsPage.classCompleted"

		Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusPrivateMessage"
		And   Worker expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassEnabled"
		
		# Keep Poster Alive (Browserstack won't idle for more than 90s)
		And   Poster reloads current page

		# Worker Accepts Cancellation
		
		And   Worker clicks on the button "taskDetailsPage.cancellationAlertCTA"
		And   Worker expects that element "taskDetailsPage.cancellationRequestDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.cancellationRequestHeader" contains the text "taskDetailsPage.cancellationRequestHeaderMessage"
		And   Worker clicks on the button "taskDetailsPage.cancellationAccept"

		# Worker Accepts Cancellation Reason

		And   Worker expects that element "taskDetailsPage.cancellationRequestAcceptedDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.cancellationRequestAcceptedHeader" contains the text "taskDetailsPage.cancellationRequestAcceptedHeaderMessage"
		And   Worker expects that element "taskDetailsPage.cancellationReasonAccept" becomes visible
		And   Worker expects that element "taskDetailsPage.cancellationReason" contains the quotedText "taskDetailsPage.posterAccidentallyAcceptedOfferText"
		And   Worker clicks on the button "taskDetailsPage.cancellationReasonAccept"
		And   Worker expects that element "taskDetailsPage.cancellationReasonAcceptedDialog" becomes visible
		And   Worker expects that element "taskDetailsPage.cancellationReasonAcceptedHeader" contains the text "taskDetailsPage.cancellationReasonAcceptedHeaderMessage"
		And   Worker expects that element "taskDetailsPage.cancellationReasonAccept" becomes visible
		And   Worker clicks on the button "taskDetailsPage.cancellationReasonAccept"
		
		# Keep Poster Alive (Browserstack won't idle for more than 90s)
		And   Poster reloads current page

		# Verify Worker's Final Status

		And   Worker expects that element "taskDetailsPage.cancellationNotificationAlertError" contains the text "taskDetailsPage.posterCancellationFinalMessageReceiver"
		And   Worker expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
		And   Worker expects that element "taskDetailsPage.stepAccepted" contains the value "CANCELLED"
		Then  Worker expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusCancelled"
		And   Worker expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassDisabled"
		Then  Worker expects that element "taskDetailsPage.commentsShowHide" becomes visible
		Then  Worker clicks on the element "taskDetailsPage.commentsShowHide"
		Then  Worker expects that element "taskDetailsPage.commentsNotice" contains the text "taskDetailsPage.closedComments"
		Then  Worker expects that element "taskDetailsPage.assigneeState" contains the value "CANCELLED"
		
		# Keep Poster Alive (Browserstack won't idle for more than 90s)
		And   Poster reloads current page
		
		# Verify Poster's Final Status
		
		And   Poster expects that element "taskDetailsPage.cancellationNotificationAlertSuccess" contains the text "taskDetailsPage.posterCancellationFinalMessageInitiator"
		And   Poster expects that element "taskDetailsPage.stepOpen" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepAccepted" has the class "taskDetailsPage.classCompleted"
		And   Poster expects that element "taskDetailsPage.stepAccepted" contains the value "CANCELLED"
		Then  Poster expects that element "taskDetailsPage.taskStatusButton" contains the text "taskDetailsPage.taskStatusCancelled"
		And   Poster expects that element "taskDetailsPage.taskStatusButton" has the class "taskDetailsPage.buttonClassDisabled"
		Then  Poster expects that element "taskDetailsPage.posterCancelsRepostCTA" contains the text "taskDetailsPage.repostMessage"
		Then  Poster expects that element "taskDetailsPage.commentsShowHide" becomes visible
		Then  Poster clicks on the element "taskDetailsPage.commentsShowHide"
		Then  Poster expects that element "taskDetailsPage.commentsNotice" contains the text "taskDetailsPage.closedComments"
		Then  Poster expects that element "taskDetailsPage.assigneeState" contains the value "CANCELLED"


		When  Worker logs "out" of "Airtasker"
		When  Poster logs "out" of "Airtasker"