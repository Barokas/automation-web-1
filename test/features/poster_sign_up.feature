Feature: New sign-ups
  
Background: 
		Given I go to site "/"
		
Scenario: A visitor signs up as a Worker on Airtasker

		When  I sign "up" on "Airtasker"
		Then  I expect that element "homePage.newUserOnbardingFirstName" becomes visible
		# And   I set "random.firstName" to the inputfield "homePage.newUserOnbardingFirstName"
		# Then  I expect that element "homePage.newUserOnbardingLastName" becomes visible
		# And   I set "random.lastName" to the inputfield "homePage.newUserOnbardingLastName"
		# Then  I expect that element "homePage.newUserOnbardingSuburb" becomes visible
		#
		#         When  I set "profilePage.location" to the inputfield "homePage.newUserOnbardingSuburb"
		#         And   I expect that inputfield "homePage.newUserOnbardingSuburb" contains the text "profilePage.location"
		#
		# Then  I expect that element "homePage.locationSuggestion" becomes visible
		# And   I click on the element "homePage.locationSuggestion"
		# And   I pause for 1000ms
		# Then  I expect that inputfield "homePage.newUserOnbardingSuburb" contains the text "profilePage.locationResult"
		#
		# Then  I expect that element "homePage.choosePosterProfile" becomes visible
		# And   I click on the element "homePage.choosePosterProfile"
		#
		# Then  I expect that element "homePage.createProfileButton" becomes visible
		# And   I click on the button "homePage.createProfileButton"
		#
		#
		# Then  I expect that element "homePage.appCuesDialog" becomes visible
		
		# And   I debug

		
		# And   I jclick on the button "homePage.appCuesNextAction"
		# And   I pause for 5500ms
			
		#  		Then  I expect that element "homePage.uploadAvatarVisibleButton" becomes visible
		#
		# When  I upload "random" jpg on the element "homePage.uploadAvatarInputButton"
		# And   I click on the button "homePage.uploadAvatarFinalButton"
		
		####
		# todo 
		# And   I expect that element "homePage.taskPostedSuccessNoLoader" has the class "homePage.noLoaderClass"
		####
		
		
		# And   I pause for 3500ms
		#
		# Then  I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.addSkillsHeaderMessage"
		#
		# Then  I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.addMobileNumberMessage"
		# Then  I expect that element "homePage.mobileNumberInput" becomes visible
		# And   I set "taskDetails.testMobileNumber" to the inputfield "homePage.mobileNumberInput"
		# Then  I expect that element "homePage.sendVerificationCodeButton" becomes visible
		#
		# Then  I expect that element "homePage.sendVerificationCodeButton" becomes visible
		# And   I click on the button "homePage.sendVerificationCodeButton"
		#
		# Then  I expect that element "homePage.verificationCodeSentDialog" becomes visible
		# And   I expect that element "homePage.verificationCodeHeader" contains the text "homePage.verificationCodeSentSuccessMsgTitle"
		# And   I expect that element "homePage.verificationCodeBody" contains the text "homePage.verificationCodeBodyMessage"
		#
		# Then  I expect that element "homePage.verificationAlertOKButton" becomes visible
		# And   I click on the button "homePage.verificationAlertOKButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.addMobileNumberMessage"
		# Then  I expect that element "homePage.verificationCodeInput" becomes visible
		# And   I set "taskDetails.testVerificationCode" to the inputfield "homePage.verificationCodeInput"
		# Then  I expect that element "homePage.sendVerificationCodeButton" becomes visible
		#
		# Then  I expect that element "homePage.sendVerificationCodeButton" becomes visible
		# And   I click on the button "homePage.sendVerificationCodeButton"
		# And   I pause for 3000ms
		# And   I expect that element "homePage.verificationCodeDisplay" has the class "homePage.noLoaderClass"
		#
		# And   I expect that element "homePage.verificationCodeChangeButton" becomes visible
		# And   I expect that element "homePage.verificationCodeRemoveButton" becomes visible
		#
		# And   I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.moreAboutYouDialogHeaderMessage"
		# And   I expect that element "homePage.moreAboutYouDescriptionInput" becomes visible
		# And   I set "random.sentence" to the inputfield "homePage.moreAboutYouDescriptionInput"
		#
		# And   I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" eventually contains the text "homePage.paymentDetailsDialogHeaderMessage"
		#
		# Then  I expect that element "homePage.accountHolderNameInput" becomes visible
		# And   I set "taskDetails.accountHolderName" to the inputfield "homePage.accountHolderNameInput"
		#
		# Then  I expect that element "homePage.bsbInput" becomes visible
		# And   I set "taskDetails.bsb" to the inputfield "homePage.bsbInput"
		#
		# Then  I expect that element "homePage.accountNumberInput" becomes visible
		# And   I set "taskDetails.accountNumber" to the inputfield "homePage.accountNumberInput"
		#
		# And   I expect that element "homePage.addBankAccountButton" becomes visible
		# And   I expect that element "homePage.addBankAccountSuccessNoLoader" has the class "homePage.noLoaderClass"
		#
		# And   I click on the button "homePage.addBankAccountButton"
		# And   I expect that element "homePage.onboardingHeader" eventually contains the text "homePage.checkOutAvailableWorkHeaderMessage"
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		#
		# And   I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.chooseTaskHeaderMessage"
		#
		# And   I expect that element "homePage.onboardingNextButton" becomes visible
		# And   I click on the button "homePage.onboardingNextButton"
		#
		# Then  I expect that element "homePage.onboardingStepDialog" becomes visible
		# And   I expect that element "homePage.onboardingHeader" contains the text "homePage.completeTaskHeaderMessage"
		#
		# And   I expect that element "homePage.onboardingFinalButton" becomes visible
		# And   I click on the button "homePage.onboardingFinalButton"
		#
		# Given I go to site "/account/payments/"
		# Then  I expect that the currenturl is "homePage.payments_URL"
		#
		# And   I expect that element "homePage.paymentMethodBillingAddress" becomes visible
		# And   I set "random.address" to the inputfield "homePage.paymentMethodBillingAddress"
		#
		# And   I expect that element "homePage.paymentMethodPostCode" becomes visible
		# And   I set "random.zip" to the inputfield "homePage.paymentMethodPostCode"
		#
		# And   I expect that element "homePage.paymentMethodCity" becomes visible
		# And   I set "random.city" to the inputfield "homePage.paymentMethodCity"
		#
		# And   I expect that element "homePage.paymentMethodState" becomes visible
		# And   I set "taskDetails.state" to the inputfield "homePage.paymentMethodState"
		#
		# And   I expect that element "homePage.paymentMethodCountry" becomes visible
		# And   I set "taskDetails.country" to the inputfield "homePage.paymentMethodCountry"
		#
		# And   I expect that element "homePage.paymentMethodAddBillingAddressButton" becomes visible
		# And   I click on the button "homePage.paymentMethodAddBillingAddressButton"
		#
		# And   I expect that element "homePage.paymentMethodBillingAddressRemoveButton" becomes visible
		#
		# Given I go to site "/account/profile/"
		# Then  I expect that the currenturl is "homePage.profile_URL"
		#
		# And   I expect that element "homePage.profileBirthdayDate" becomes visible
		# And   I set "taskDetails.birthdayDate" to the inputfield "homePage.profileBirthdayDate"
		#
		# And   I expect that element "homePage.profileBirthdayMonth" becomes visible
		# And   I set "taskDetails.birthdayMonth" to the inputfield "homePage.profileBirthdayMonth"
		#
		# And   I expect that element "homePage.profileBirthdayYear" becomes visible
		# And   I set "taskDetails.birthdayYear" to the inputfield "homePage.profileBirthdayYear"
		#
		# And   I expect that element "homePage.profileSaveButton" becomes visible
		# And   I click on the button "homePage.profileSaveButton"
		#