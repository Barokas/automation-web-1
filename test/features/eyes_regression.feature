Feature: Visual Regression on Airtasker Tasks

 Scenario: Filter on a suburb
 	Given I open Eyes for "T3: Search Filters"
	Given I go to site "/"
	
	When  I log "in" to "Airtasker"
	Given I go to site "/tasks"
	And   I click on the button "homePage.taskSettingsButton"
	And   I click on the button "homePage.taskTypeWithLocation"
	
    When  I set "value.Pigeon" to the inputfield "homePage.baseLocation"
    And   I expect that inputfield "homePage.baseLocation" contains the value "Pigeon"
	And   I pause for 1000ms
	
	Then  I press "keys.down"
	Then  I press "keys.enter"
	And   I pause for 500ms
	Then  I expect that inputfield "homePage.baseLocation" contains the value "Pigeon Hole, Northern Territory, Australia"
	
	And   I click on the button "homePage.updateButton"
	And I pause for 3000ms
	
	Then  I capture a screenshot for the "Filtered-Tasks" page
	And   I click on the element "homePage.taskIDforRegression"
	Then  I capture a screenshot for the "Task Details" page
	
	And I pause for 4000ms