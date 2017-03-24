var winston = require('winston')

var railsMainPage	= require('../../pageObjects/rails/railsMainPage.js');

import {getBrowserFor} from '../utils'


module.exports = (person, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(activateUser)");
	
	var userStatus = getBrowserFor(person).getText(railsMainPage.undeleteUser)
	
	logging.info("userStatus: " + userStatus)
	
	if (userStatus === railsMainPage.deletedUser) {

		logging.info("Trying to undelete the user")
		getBrowserFor(person).click(railsMainPage.undeleteUser)
		getBrowserFor(person).alertAccept()
		
	} 
	
	userStatus = getBrowserFor(person).getText(railsMainPage.activateUser)

	if (userStatus === railsMainPage.deactivatedUser) {
		
		logging.info("Trying to activate the user")
		getBrowserFor(person).click(railsMainPage.activateUser)
		getBrowserFor(person).alertAccept()

	}
	

	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/
	
	if (done) {

		done();
	}
};

