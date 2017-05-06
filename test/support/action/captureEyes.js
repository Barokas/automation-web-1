/**
 * Capture screenshot using Applitools Eyes API
 */

var homePage 		= require('../pageObjects/homePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

import {getBrowserFor} from './utils'

module.exports = (
    person, page, region, done
) => {
	
	// console.log("(captureEyes) Doing the Eyes for: " + person)
	// console.log("(captureEyes) Doing the Eyes  on: " + page)
	
	if ( region === 'region' ) {

		var rawElemPO = page
		var regionSelector = eval(page);

		getBrowserFor(person).EyesCheckRegion(regionSelector);	

	} else if ( region === 'page') {

		getBrowserFor(person).EyesCheckWindow(page);	
	
	}
    
	
	done()
};
