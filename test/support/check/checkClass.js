/**
 * Check if the given element has the given class
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not
 * @param  {String}   expectedClassName The class name to check
 * @param  {Function} done              Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');

var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'

module.exports = (person, elem, falseCase, expectedClassName, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(checkClass)");
	
	var rawElemPO = elem
	elem = eval(elem)
	
	var rawExpectedClassNamePO = expectedClassName
	expectedClassName = eval(expectedClassName)
	
	// taking a breath between checks
	getBrowserFor(person).pause(frameworkSettings.minPause)
	
    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const classesList = getBrowserFor(person).getAttribute(elem, 'className').split(' ');

	
	
    if (falseCase === 'does not have') {
		
		logging.info(":LOOK: " + rawElemPO + " (" + classesList + ")" + " should not have " + expectedClassName)	
		
        expect(classesList).to.not
            .include(
                expectedClassName,
                `Element ${elem} should not have the class ${expectedClassName}`
            );
    } else {
		
		logging.info(":LOOK: " + rawElemPO + " (" + classesList + ")" + " should have " + expectedClassName)
		
        expect(classesList).to
            .include(
                expectedClassName,
                `Element ${elem} should have the class ${expectedClassName}`
            );
    }
	
	logging.info(":BUZZ: " + rawElemPO + " finally has " + classesList)	

    done();
};
