Feature: Multi Visual Regression

 Scenario: Capture screenshot of an Actor
 	Given Poster opens Eyes for "T9: Multi Remote Poster"
	Given Poster goes to site "/"
	Then  Poster captures a screenshot for the "Home" page
	Then  Poster closes Eyes

 Scenario: Capture screenshot of an Actor
<<<<<<< Updated upstream
 	Given Worker opens Eyes for "T9: Multi Remote"
	Given Worker goes to site "/"
	Then  Worker captures a screenshot for the "Home" page
	Then  Worker closes Eyes

=======
 	Given Worker opens Eyes for "T9: Multi Remote Worker"
	Given Worker goes to site "/"
	Then  Worker captures a screenshot for the "Home" page
	Then  Worker closes Eyes
>>>>>>> Stashed changes

	