Feature: Rails Automation
		 Grab a userID from a Google Sheet
		 And modify the user suitably
		 And then delete the user
  
Background: 
		Given Admin goes to rails "/"
		And   Admin finds an eligible user from spreadsheet from rows 51 to 75
		And   Admin pauses for 5000ms
		And   Admin marks the row to "PROCESSING"

Scenario: Deactivate user accounts
		
		And   Admin logs "in" to "Rails"				
		And   Admin goes to rails "user.railsSheetAirtaskerUserID"
		And   Admin activates user if necessary
		And   Admin expects that element "railsMainPage.deleteUser" contains the text "railsMainPage.aliveUser"


		# User Details
		
		And   Admin clicks on the button "railsMainPage.userDetailsEditButton"
				
		And   Admin expects that element "railsMainPage.userDetailsEmail" becomes visible
		And   Admin expects that inputfield "railsMainPage.userDetailsEmail" contains the text "global.railsSheetEmail"
		When  Admin prefixes "value.delete_" to the inputfield "railsMainPage.userDetailsEmail"
		And   Admin clears the inputfield "railsMainPage.userDetailsMobile"
		And   Admin clicks on the button "railsMainPage.userDetailsSave"

		# Admin Notes

		And   Admin clicks on the element "railsMainPage.adminNotesTab"
		When  Admin selects the option with the value "Account Deactivated" for element "railsMainPage.adminActionTaken"
		When  Admin selects the option with the value "Requested by member" for element "railsMainPage.adminReason"
		And   Admin sets "global.railsSheetZendeskID" to the inputfield "railsMainPage.zenDeskURL"
		And   Admin sets "railsMainPage.adminMessage" to the inputfield "railsMainPage.adminNotesDescription"
		And   Admin clicks on the button "railsMainPage.adminSave"


		# Alerts
		And   Admin clicks on the element "railsMainPage.alertsTab"


		# Email Notifications
		When  Admin clears the checkbox "railsMainPage.email_alerts"
		And   Admin clears the checkbox "railsMainPage.email_info"
		And   Admin clears the checkbox "railsMainPage.email_interesting_tasks"
		And   Admin clears the checkbox "railsMainPage.email_news"
		And   Admin clears the checkbox "railsMainPage.email_task_reminders"
		And   Admin clears the checkbox "railsMainPage.email_task_updates"
		And   Admin ticks the checkbox "railsMainPage.email_transactions"


		# Push Notifications
		And   Admin clears the checkbox "railsMainPage.push_alerts"
		And   Admin clears the checkbox "railsMainPage.push_info"
		And   Admin clears the checkbox "railsMainPage.push_interesting_tasks"
		And   Admin clears the checkbox "railsMainPage.push_news"
		And   Admin clears the checkbox "railsMainPage.push_task_reminders"
		And   Admin clears the checkbox "railsMainPage.push_task_updates"
		And   Admin ticks the checkbox "railsMainPage.push_transactions"


		# SMS Notifications
		And   Admin clears the checkbox "railsMainPage.sms_alerts"
		And   Admin clears the checkbox "railsMainPage.sms_info"
		And   Admin clears the checkbox "railsMainPage.sms_interesting_tasks"
		And   Admin clears the checkbox "railsMainPage.sms_news"
		And   Admin clears the checkbox "railsMainPage.sms_task_reminders"
		And   Admin clears the checkbox "railsMainPage.sms_task_updates"
		And   Admin ticks the checkbox "railsMainPage.sms_transactions"

		And   Admin jclicks on the button "railsMainPage.saveNotificationSettingsButton"
		And   Admin jclicks on the element "railsMainPage.deleteUser"
		When  Admin accepts the alertbox

		And   Admin expects that element "railsMainPage.deleteUserSuccessContainer" has the class "railsMainPage.successClass"
		And   Admin pauses for 10000ms
		And   Admin pauses for 10000ms
		And   Admin pauses for 10000ms
		
		And   Admin goes to rails "user.railsSheetAirtaskerUserID"
		And   Admin expects that element "railsMainPage.undeleteUser" contains the text "railsMainPage.deletedUser"
		And   Admin marks the row to "DELETED"
		And   Admin pauses for 3000ms
		