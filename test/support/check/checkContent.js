/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   type          Type of element (inputfield or element)
 * @param  {String}   element       Element selector
 * @param  {String}   browserInstance   The browser instance to use
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 * @param  {Function} done          Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');

var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'


module.exports = (
    person, type, element, falseCase, mode, expectedFormat, expectedText, done
) => {
	
	mode = mode || 'immediate'
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(checkContent)");
	
	logging.verbose("type: " + type)
	logging.verbose("element: " + element)
	logging.verbose("falseCase: " + falseCase)
	logging.verbose("mode: " + mode)
	logging.verbose("expectedFormat: " + expectedFormat)
	logging.verbose("expectedText: " + expectedText)

	
	var preEvalElement = element	
	element = eval(element)
	
	
	if (expectedFormat === 'value') {
		expectedText = expectedText.split(".")[1]
	} else {
		expectedText = eval(expectedText)
	}
		
	if (expectedFormat === 'price') {
		expectedText = taskDetails.currency + expectedText
	} else if (expectedFormat === 'quotedText') {
		// expectedText = "\“" + expectedText + "\”"
		expectedText = "\"" + expectedText + "\""
	} 
	
	logging.verbose("*expectedText: " + expectedText)
	
	// taking a breath between checks
	getBrowserFor(person).pause(frameworkSettings.minPause)
	
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    const command = (type !== 'inputfield') ? 'getText' : 'getValue';

    /**
     * Function to execute when finished
     * @type {Function}
     */
    let doneCallback = done;

    /**
     * The expected text to validate against
     * @type {String}
     */
    let parsedExpectedText = expectedText;

    /**
     * Whether to check if the content equals the given text or not
     * @type {Boolean}
     */
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (!doneCallback && typeof parsedExpectedText === 'function') {
        doneCallback = parsedExpectedText
        parsedExpectedText = ''

        boolFalseCase = !boolFalseCase
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = ''
        boolFalseCase = true
    }

    var text = ''
	
	logging.verbose("command: " + command)
	
	text = getBrowserFor(person)[command](element)
	
	logging.info(preEvalElement + " =actual= " + text)
	
	
	if (mode === 'immediate') {
	
	    if (boolFalseCase) {
		
			logging.info(preEvalElement + " =!should!= " + parsedExpectedText)
	        parsedExpectedText.should.not.equal(text)
		
	    } else {
		
			logging.info(preEvalElement + " =should= " + parsedExpectedText)
	        parsedExpectedText.should.equal(text)
    
		}
		
	} else if (mode === ' eventually') {
		
	    getBrowserFor(person).waitUntil(function () {
	         return text === parsedExpectedText
	       }, frameworkSettings.waitForTimeOut, 'Expectation: ' + parsedExpectedText + ' | Reality: ' + text + ' | waitUntil gave up after ' + frameworkSettings.waitForTimeOut + 'ms' + ' and many retries')
		   
	}
	  

	if (done) {
		
		done();
	} 
	
};
