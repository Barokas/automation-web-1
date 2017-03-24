/**
 * Accept terms and conditions if updated and available to the user
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */

var winston = require('winston');

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

import {getBrowserFor} from '../../support/action/utils'
import clickElement from '../../support/action/clickElement';
import waitForVisible from '../../support/action/waitForVisible';


module.exports = (person, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(acceptTerms)");
	
    /**
     * Element to perform the action on
     * @type {String}
     */
	var elem = taskDetailsPage.acceptUpdatedTermsCheckbox
   
    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = 'click'
	
	logging.verbose(" ------- " + browser.select(person).options.termsAlertVisible + " ---------- ")
	
	if ( browser.select(person).options.termsAlertVisible ) {
		
		logging.verbose("Pouncing on Terms & Conditions")
		waitForVisible(person, "taskDetailsPage.acceptUpdatedTermsCheckbox", false, false)
		logging.verbose(method + " -> " + elem)
		clickElement(person, "click", "element", "taskDetailsPage.acceptUpdatedTermsCheckbox", false)
		
	} else {
		
		logging.verbose("No Terms Alert Seen")
		
	}
	
};