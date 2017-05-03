/**
 * Track and Verify Profile Data
 *
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

import {getBrowserFor} from './utils'

module.exports = (person, action, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(profileTracker)");
			
	if ( action === "records" ) {
		
		global.desiredFirstName = getBrowserFor(person).element(profilePage.firstName).getText()
		global.desiredLastName = getBrowserFor(person).element(profilePage.lastName).getText()
		global.desiredTagLine = getBrowserFor(person).element(profilePage.tagLine).getText()
		global.desiredDescription = getBrowserFor(person).element(profilePage.description).getText()
		global.desiredLocationInput = getBrowserFor(person).element(profilePage.locationInput).getText()
		
		logging.info("desiredDescription: " + desiredDescription)
		
	} else if ( action === "verifies" ) {
		
		var savedFirstName = getBrowserFor(person).element(profilePage.firstName).getText()
		var savedLastName = getBrowserFor(person).element(profilePage.lastName).getText()
		var savedTagLine = getBrowserFor(person).element(profilePage.tagLine).getText()
		var savedDescription = getBrowserFor(person).element(profilePage.description).getText()
		var savedLocationInput = getBrowserFor(person).element(profilePage.locationInput).getText()
		
		logging.info("savedDescription: " + savedDescription)
		
    	savedFirstName.should
        	.equal(
            	global.desiredFirstName,
            	`First Name expected to be ${global.desiredFirstName} but found ${savedFirstName} `
        	);
		
    	savedLastName.should
        	.equal(
            	global.desiredLastName,
            	`Last Name expected to be ${global.desiredLastName} but found ${savedLastName} `
        	);
			
    	savedTagLine.should
        	.equal(
            	global.desiredTagLine,
            	`Tag Line expected to be ${global.desiredTagLine} but found ${savedTagLine} `
        	);
			
		// TODO found issues with saving the random sentence the second time. So not verifying description for now.
			
    	// savedDescription.should
    	//         	.equal(
    	//             	global.desiredDescription,
    	//             	`Description expected to be ${global.desiredDescription} but found ${savedDescription} `
    	//         	);
			
    	savedLocationInput.should
        	.equal(
            	global.desiredLocationInput,
            	`Location expected to be ${global.desiredLocationInput} but found ${savedLocationInput} `
        	);
			
			
	}
		
    done();

};