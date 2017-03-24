/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method            The method to use (add or set)
 * @param  {String}   value             The value to set the element to
 * @param  {String}   element           Element selector
 * @param  {String}   person		    The person instance to use
 * @param  {Function} done              Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// var railsMainPage	= require('../pageObjects/rails/railsMainPage.js');

import {getBrowserFor, getRandomData} from './utils'

module.exports = (person, method, value, element, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(setInputField)");
		
	logging.silly("method: " + method)
	logging.silly("value: " + value)
	logging.silly("element: " + element)

	var rawElemPO = element	
	element = eval(element);
	
	var randomDataType;
	
	if (value.indexOf("random") > -1) {
		
		// the element is assumed to be in format "random.format"
	
		randomDataType = value.split(".")[1]
		value = getRandomData(randomDataType)
	
	} else if (value.indexOf("value") > -1) {
		
		value = value.split(".")[1]
	
	} else {
		
		value = eval(value)
	}
	
	if (method.substring(0,6) == "prefix") {
	
		value = value + getBrowserFor(person).getValue(element)
		method = 'setValue'
	
	}
		
       /**
        * The command to perform on the browser object (addValue or setValue)
        * @type {String}
        */
       const command = ((method === 'add') || (method === 'adds')) ? 'addValue' : 'setValue';

   		// winston.profile("[" + person + "] " + "(setInputField) " + rawElemPO);
		getBrowserFor(person)[command](element, value)
		// winston.profile("[" + person + "] " + "(setInputField) " + rawElemPO);
		
    done();

};