Feature: Principal Workflow

Scenario: Post Task, Make Offer, Assign, Request and Release Payment, Write Reviews
	Given Poster opens Eyes for "Support: Multi Remote Poster"
	Given Worker opens Eyes for "Support: Multi Remote Worker"
	Given Poster goes to site "/"
	Given Worker goes to site "/"
	Then  Poster captures a screenshot for the "Home" page
	Then  Worker captures a screenshot for the "Home" page

	Then  Poster closes Eyes
	Then  Worker closes Eyes