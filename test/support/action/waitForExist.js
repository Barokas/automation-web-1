/**
 * Wait for the given element to Exist
 * @param  {String}   elem      Element selector
 * @param  {String}   falseCase Whether to wait for existence or disappearance
 *                              
 * @param  {Function} done      Function to execute when finished
 *
 */

var winston = require('winston');

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'

module.exports = (person, elem, falseCase, done) => {
	
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = parseInt(frameworkSettings.waitForExistTimeOut, 10)
	var rawElemPO = elem
	elem = eval(elem)
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(waitForExist) (" + ms + " ms" + ")");
	
	logging.info(":LOOK: " + rawElemPO)
	
    /**
     * The element to waitForExist
     * @type {Object}
     */
    const element = getBrowserFor(person).element(elem);
	
	winston.profile("[" + person + "] " + "(waitForExist) " + rawElemPO);
	element.waitForExist(ms, falseCase);
	winston.profile("[" + person + "] " + "(waitForExist) " + rawElemPO);
	
	logging.info(":BUZZ: " + rawElemPO)
	
	if (done) {
		done();
	}
    
};
