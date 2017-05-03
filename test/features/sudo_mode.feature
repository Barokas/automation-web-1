Feature: Login using auth token as a sudo user on Airtasker
  
Background: 
		Given I open the site "/?auth_token=znqSoFCKgrjcx8DZE1fu"
		And   I pause for 4000ms
		  
Scenario: I should be able to sudo
		Then  I expect that the title is "homePage.title"
		And   I expect that element "homePage.postTaskLink" becomes visible
		And   I click on the button "homePage.postTaskLink"
		And   I expect that element "homePage.postTaskForm" becomes visible
		And   I expect that element "homePage.postTaskFormTitle" contains the text "homePage.postTaskFormTitleValue"
		Then  I expect that the currenturl is "homePage.postLogin_postTask_URL"

