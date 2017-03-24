/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');

import {getBrowserFor} from './utils'
import waitForVisible from './waitForVisible';

module.exports = (person, action, type, element, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(clickElement)");
	
	/* let's first wait for element to be visible 
	 * before trying to work on it 
	*/
	
	// waitForVisible(person, element, false, done)
	var rawElemPO = element
	element = eval(element);
	
    /**
     * Element to perform the action on
     * @type {String}
     */
    const elem = (type === 'link') ? `=${element}` : element;

    /**
     * The method to call on the browser object
     * @type {String}
     */
	
	
	
	if (action.substring(0,1) == 'j') { // click via javascript execution
		
		logging.info("(try) " + action + " -> " + rawElemPO)
		
		action = (action.substring(1) === 'click') || (action.substring(1) === 'clicks') ? 'click' : 'xxx'
		
	    var result = getBrowserFor(person).execute(function(elem, action) {
			
			switch (action) {
				case 'click':
					$(elem).click()
			}

	       }, elem, action)
		   
		logging.info("(ok!) " + action + " -> " + rawElemPO)
	
	} else if (action.substring(0,1) == 'e') { // elementID click
		
		logging.info("(try) " + action + " -> " + rawElemPO)
		
		var elemId = getBrowserFor(person).elements(elem).value[0].ELEMENT
		getBrowserFor(person).elementIdClick(elemId)
		   
		logging.info("(ok!) " + action + " -> " + rawElemPO)
		
	} else {
		
	    const method = (action === 'click') || (action === 'clicks') ? 'click' : 'doubleClick';

		logging.info("(try) " + method + " -> " + rawElemPO)
	    getBrowserFor(person)[method](elem)
		logging.info("(ok!) " + method + " -> " + rawElemPO)
		
	}
    
	

   
	   
	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	if (done) {

		done();
	}
};