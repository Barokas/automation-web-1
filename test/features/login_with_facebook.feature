Feature: A user logs in to Airtasker via Social
		  
Scenario: Login using Facebook

		Given I open the site "/"
		And   I click on the element "homePage.loginLink_landing_page"
		And   I expect that element "homePage.facebookLoginCTA" becomes visible
		And   I click on the button "homePage.facebookLoginCTA"
		And   I pause for 1000ms
        Then  I expect a new window has been opened
		And   I pause for 1000ms
        When  I focus the last opened window

		And   I pause for 1000ms
		When  I log "in" to "Facebook"
		And   I pause for 1000ms
        When  I focus the last opened window
		And   I pause for 1000ms
		And   I expect that element "homePage.postTaskLink" becomes visible
		Then  I expect that the title is "homePage.title"
