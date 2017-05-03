/**
 * Pushes and Pops values to/from global array (defined in wdio.conf.js)
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

import {getBrowserFor} from './utils'

module.exports = (person, action, element, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(pushPopGlobal)");
		
	logging.info("action: " + action)
	logging.info("element: " + element)

	var rawElemPO = element	
	element = eval(element);
	
	var randomDataType;
	var retrievedValue = getBrowserFor(person).getValue(element)
	
	if (action.indexOf("push") > -1) {
		
		logging.silly("Pushing " + retrievedValue + " into the global contentAsset" )
		contentAsset.unshift(retrievedValue)
		
	
	} else if (action.indexOf("pop") > -1) {
		
		var poppedValue = contentAsset.pop()
		
		logging.silly("Expecting " + retrievedValue )
		logging.silly("Popped : " + poppedValue)
		
		retrievedValue.should.equal(poppedValue)
		
	}
	
    done();

};