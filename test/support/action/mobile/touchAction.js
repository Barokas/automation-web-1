/**
 * Perform an touch action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../../pageObjects/homePage.js');
var profilePage 	= require('../../pageObjects/profilePage.js');
var taskDetailsPage = require('../../pageObjects/taskDetailsPage.js');

var mainPage 		= require('../../pageObjects/ios/mainPage.js');
var railsMainPage 	= require('../../pageObjects/rails/railsMainPage.js');

import {getBrowserFor} from '../utils'
import waitForVisible from '../waitForVisible';

module.exports = (person, action, type, element, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(touchAction)");
	
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
    const method = (action === 'click') || (action === 'clicks') ? 'click' : 'doubleClick';

	logging.info("(try) " + method + " -> " + rawElemPO)
	
	winston.profile("[" + person + "] " + "(touchAction) " + rawElemPO);
    getBrowserFor(person)[method](elem)
	winston.profile("[" + person + "] " + "(touchAction) " + rawElemPO);
	
	logging.info("(ok!) " + method + " -> " + rawElemPO)

	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	if (done) {

		done();
	}
};