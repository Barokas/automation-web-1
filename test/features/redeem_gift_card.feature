Feature: Marketing
  
Background: 
		Given Poster goes to site "/"
		When  Poster logs "in" to "Airtasker"
		
Scenario: Redeem Gift Cards

		Given Poster goes to site "/redeem/"

		And   Poster expects that element "homePage.redeemCardButton" becomes visible
		And   Poster clicks on the button "homePage.redeemCardButton"
		Then  Poster expects that the currenturl is "homePage.redeemCardURL"
		And   Poster expects that element "homePage.redeemCardDialog" becomes visible
		And   Poster expects that element "homePage.redeemCardHeader" contains the text "taskDetailsPage.redeemCardHeaderMessage"

		Then  Poster expects that element "homePage.redeemCardNumber" becomes visible
		When  Poster sets "homePage.redeemCode" to the inputfield "homePage.redeemCardNumber"
		And   Poster clicks on the button "homePage.redeemCardSubmitButton"

		And   Poster expects that element "homePage.redeemSuccessDialog" becomes visible
		And   Poster expects that element "homePage.redeemSuccessHeader" contains the text "taskDetailsPage.redeemSuccessHeaderMessage"

		And   Poster clicks on the button "homePage.redeemSuccessGoToDashboard"
		And   Poster expects that element "homePage.redeemSuccessDialog" becomes not visible
		
		Then  Poster expects that the currenturl is "homePage.dashboard_URL"