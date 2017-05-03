Feature: Poster Profile
		 As a Poster I am able to modify my Profile
 
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		
Scenario: Change Location
		Given Poster goes to Airtasker Profile

        # When  Poster clears the inputfield "profilePage.firstName"
    	# When  Poster sets "random.firstName" to the inputfield "profilePage.firstName"

        # When  Poster clears the inputfield "profilePage.lastName"
    	# When  Poster sets "random.lastName" to the inputfield "profilePage.lastName"
		
        When  Poster clears the inputfield "profilePage.tagLine"
    	When  Poster sets "random.sentence" to the inputfield "profilePage.tagLine"
		
        When  Poster clears the inputfield "profilePage.description"
    	When  Poster sets "random.sentence" to the inputfield "profilePage.description"
				
		When  Poster clears the inputfield "profilePage.locationInput"
		Then  Poster expects that inputfield "profilePage.locationInput" does not contain any text

		When  Poster sets "profilePage.location" to the inputfield "profilePage.locationInput"
		And   Poster expects that inputfield "profilePage.locationInput" contains the text "profilePage.location"
		And   I pause for 1000ms

		And   Poster clicks on the element "profilePage.locationSuggestion"
		And   I pause for 500ms
		Then  Poster expects that inputfield "profilePage.locationInput" contains the text "profilePage.locationResult"

		Then  Poster records expected profile
		
		When  Poster clicks on the button "profilePage.saveProfileButton"
		And   I pause for 1000ms
		
		# Refresh the page and re-check if location has indeed changed
		Given Poster goes to site "/account/profile/"
		Then  Poster expects that inputfield "profilePage.locationInput" contains the text "profilePage.locationResult"
		
		Then  Poster verifies expected profile
		
		And   Poster logs "out" of "Airtasker"