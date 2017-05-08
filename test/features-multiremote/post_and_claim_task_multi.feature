Feature: Applitools

Scenario: Capture a CSS region using eyesCheckRegion
	Given Poster opens Eyes for "Support: Eyes Check Region"
	Given Poster goes to site "/"
	
	# Then Poster debugs
	And   Poster captures a screenshot for the "homePage.postTaskButton" region
	Then Poster closes Eyes
