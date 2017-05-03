Feature: Basic user actions on Airtasker
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		  
Scenario: Add a comment to an Open task
		Then  Poster expects that the title is "homePage.title"
		And   Poster expects that element "homePage.browseTasksLink" becomes visible
		And   Poster clicks on the button "homePage.browseTasksLink"
		Then  Poster expects that the currenturl is "homePage.browseTasks_URL"
		And   Poster expects that element "homePage.openTasksLink" becomes visible
		
		And   Poster clicks on the button "homePage.openTasksLink"
		
		# TODO avoid the pause here
		And   Poster pauses for 5000ms
		And   Poster expects that element "homePage.mainLoader" has the class "homePage.noLoaderClass"
		
		Then  Poster navigates to the first task
		Then  Poster records count of comments
		
		And   Poster expects that element "homePage.taskDetails" becomes visible
		And   Poster expects that element "homePage.taskActivityComments" becomes visible

		And   Poster sets "random.sentence" to the inputfield "homePage.commentTextArea"
		And   Poster clicks on the button "homePage.commentSendButton"
		And   Poster expects that element "homePage.commentSentLoader" has the class "homePage.noLoaderClass"
		And   Poster pauses for 5000ms
		Then  Poster verifies count of comments