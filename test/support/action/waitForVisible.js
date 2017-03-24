/**
 * Wait for the given element to become visible
 * @param  {String}   elem      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 * @param  {Function} done      Function to execute when finished
 *
 * @todo  merge with waitfor
 */

var winston = require('winston');

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
var frameworkSettings	= require('../settings/framework.js');

// var railsMainPage = require('../pageObjects/rails/railsMainPage.js');

// var webdrivercss = require('webdrivercss-custom-v4-compatible')

import {getBrowserFor} from '../action/utils'

module.exports = (person, elem, falseCase, done) => {
		
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
	
	falseCase = falseCase || false
	done = done || false
	

	
    const ms = parseInt(frameworkSettings.waitForVisibleTimeOut, 10)
	var rawElemPO = elem
	elem = eval(elem)
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(waitForVisible) (" + ms + " ms" + ")");
	
	logging.info(":LOOK: " + rawElemPO + " = " + falseCase)

    /**
     * The element to wait for
     * @type {Object}
     */
    const element = getBrowserFor(person).element(elem);
	
	// getBrowserFor(person).saveElementScreenshot('great-shot-element-' + elem + '.jpg', elem)
	// getBrowserFor(person).webdrivercss('Capture HIW Link', [
// 		{
// 	    	elem: elem,
// 	    	name: rawElemPO
// 		}
// 	]);
	
	global.actor = person
	
	winston.profile("[" + person + "] " + "(waitForVisible) " + rawElemPO);
	
    if (falseCase === ' not') {
        element.waitForVisible(ms, true);
    } else {       
    	element.waitForVisible(ms, falseCase);
    }
	
	winston.profile("[" + person + "] " + "(waitForVisible) " + rawElemPO);
	
	logging.info(":BUZZ: " + rawElemPO)
	
	
	if (done) {
		done();
	}
    
};
