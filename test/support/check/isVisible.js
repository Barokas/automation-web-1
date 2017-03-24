/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 * @param  {Function} done      Function to execute when finished
 */

var homePage 		= require('../pageObjects/homePage.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// var mainPage 		= require('../pageObjects/ios/mainPage.js');
// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');

var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {'timestamp':true});

import {getBrowserFor} from '../action/utils'

module.exports = (person, element, falseCase, done) => {
	
	winston.level = 'info'; // todo: get a better place to initialise winston
	
		
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(isVisible)")
	
	var preEvalElement = element
	
	element = eval(element)
	
	logging.verbose(preEvalElement + " " + "(" + element + ")")
    
	/**
     * Visible state of the given element
     * @type {String}
     */
    const isVisible = getBrowserFor(person).isVisible(element)
   
    var logMsg = isVisible ? " is visible" : " not visible"
	
    logging.info(preEvalElement + logMsg)
	
    if (falseCase) {
		
		logging.silly("falseCase")
		
        isVisible.should.not
            .equal(true, `expected element "${element}" not to be visible`)
    } else {
		
		logging.silly("elseCase")
		
        isVisible.should
            .equal(true, `expected element "${element}" to be visible`)
    }
	
	/* 
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/
	
	if (done) {
		
		done();
	} 
  
};
