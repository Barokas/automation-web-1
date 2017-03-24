/**
 * Ensure a checkbox is in either state: Ticked | Cleared
 *
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// var railsMainPage	= require('../pageObjects/rails/railsMainPage.js');

import {getBrowserFor, getRandomData} from './utils'

module.exports = (person, action, element, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(tickOrClearCheckbox)");
		
	logging.info("action: " + action)
	logging.info("element: " + element)

	var rawElemPO = element	
	element = eval(element);
	
	var randomDataType;
	
	if ( action.substring(0,4) == "tick" ) {
		
		// if it is not checked, then check it
		if ( !getBrowserFor(person).isSelected(element) ) {
			getBrowserFor(person).click(element)
		}
		
	} else if ( action.substring(0,5) === "clear" ) {
		
		// if it is checked, then check it
		if ( getBrowserFor(person).isSelected(element) ) {
			getBrowserFor(person).click(element)
		}
	}
		
    done();

};