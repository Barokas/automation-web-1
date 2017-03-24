Feature: Poster Profile
		 As a Poster I am able to modify my Profile
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		Given Poster goes to site "/account/profile"
		
Scenario: Pick an Avatar
		Then  Poster expects that element "profilePage.uploadAvatarVisibleButton" is visible
		When  Poster uploads "profilePage.gravatarFile" file on the element "profilePage.uploadAvatarInputButton"
		And   Poster goes to site "/account/dashboard"
		And   I pause for 5000ms
		And   Poster logs "out" of "Airtasker"
		
Scenario: Get a Random Avatar
		Then  Poster expects that element "profilePage.uploadAvatarVisibleButton" is visible
		When  Poster uploads "random" jpg on the element "profilePage.uploadAvatarInputButton"
		And   Poster goes to site "/account/dashboard"
		And   I pause for 5000ms
		And   Poster logs "out" of "Airtasker"