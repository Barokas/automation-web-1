# This feature uses the demo app 
#			$ cd tests/boiler
# Start the demo app 
#			$ npm run-script local-webserver
# Run the feature
#			$ ./wdio --spec test/features-multiremote/demo_app_multi.feature wdio.multiremote.conf.js

Feature: Multiremote example
    As a developer
    I want to be able to test the multiremote set-up

    Background:
		# Given Both go to url "http://127.0.0.1:8080/"
		Given Poster goes to url "http://127.0.0.1:8080/"
		And   Worker goes to url "http://127.0.0.1:8080/"
		Then  Poster expects that inputfield "demoApp.inputField" does not contain any text
        And   Worker expects that inputfield "demoApp.inputField" does not contain any text

    Scenario: Set the content of a input field in Poster
        When  Poster sets "demoApp.inputFieldContentA" to the inputfield "demoApp.inputField"
        Then  Poster expects that inputfield "demoApp.inputField" does contain any text
        And   Poster expects that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentA"
		And   Worker expects that inputfield "demoApp.inputField" does not contain any text
		
    Scenario: Set the content of a input field in Worker
		When  Worker sets "demoApp.inputFieldContentB" to the inputfield "demoApp.inputField"
        Then  Worker expects that inputfield "demoApp.inputField" does contain any text
        And   Worker expects that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentB"
        And   Poster expects that inputfield "demoApp.inputField" does not contain any text
	
    Scenario: Set the content of a input field in Poster and Worker
		When  Poster sets "demoApp.inputFieldContentC" to the inputfield "demoApp.inputField"
        And   Worker sets "demoApp.inputFieldContentD" to the inputfield "demoApp.inputField"
		Then  Poster expects that inputfield "demoApp.inputField" does contain any text
		And   Poster expects that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentC"
		Then  Worker expects that inputfield "demoApp.inputField" does contain any text
		And   Worker expects that inputfield "demoApp.inputField" contains the text "demoApp.inputFieldContentD"