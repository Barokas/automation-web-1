/**
 * Take action and verify result. If not actioned, rinse and repeat.
 *
 * Scenario this function is useful:
 *  clicking on an action button 
 *  will result in another element appearing
 *  while the actioned button itself disappears
 * 
 * This module was written to deal with cases where the action button
 * was not getting 'clicked' for reasons known only to God
 * So here we repeat the click on the action button until below conditions
 * are met -
 * the clicked element disappears (I call it the 'action')
 * the expected element appears (I call it the 'verifier')
 * 
 * @param  {String}   actionType  		The action to perform (click or doubleClick)
 * @param  {String}   actionAsset		Type of the action element (button / link / element)
 * @param  {String}   actionElement		action element in PO format (homePage.actionButton)
 * @param  {String}   verifierAsset		Type of the verifier element (button / link / element)
 * @param  {String}   verifierElement	verifier element in PO format (homePage.paymentInput)
 * @param  {Function} done    			Function to execute when finished
 */

var winston = require('winston')

var homePage = require('../pageObjects/homePage.js')
var profilePage = require('../pageObjects/profilePage.js')
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js')
var frameworkSettings	= require('../settings/framework.js')

import {getBrowserFor} from '../../support/action/utils'
import clickElement from '../../support/action/clickElement'
import waitForVisible from '../../support/action/waitForVisible'
import checkClass from '../../support/check/checkClass'



module.exports = (person, actionType, actionAsset, actionElement, verifierAsset, verifierElement, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(doAndVerifyAction)");
	
	logging.silly("actionType: " + actionType)
	logging.silly("actionAsset: " + actionAsset)
	logging.silly("actionElement: " + actionElement)
	logging.silly("verifierAsset: " + verifierAsset)
	logging.silly("verifierElement: " + verifierElement)
	
	// getBrowserFor(person).debug()
	var actionPO = actionElement //store
	var verifierPO = verifierElement //store
	
	actionElement = eval(actionElement)
	verifierElement = eval(verifierElement)
	
	const element = getBrowserFor(person).element(verifierElement);
	const ms = parseInt(frameworkSettings.verifyActionTimeOut, 10)
	
	var attempt = 1
	
	getBrowserFor(person).waitUntil(function() {
		
    	const actionElementIsVisible = getBrowserFor(person).isVisible(actionElement)
  	  	logging.info("(Pre-Action) Action Visibility expected to be true => " + actionPO + " : " + actionElementIsVisible)		
		const verifierElementIsVisible = element.isVisible()
		
		if (!actionElementIsVisible && verifierElementIsVisible) {
			logging.info("OK. Retreat!")
			// todo: if the loaderific is visible then wait and come back to check again.
			return true
		}
		
		logging.info("(try) " + "click" + " -> " + actionPO + " Attempt # " + attempt)
		
		getBrowserFor(person).pause(frameworkSettings.waitBetweenClicks)	
		
		if (getBrowserFor(person).isVisible(actionElement) && !getBrowserFor(person).isVisible(verifierElement)) {
			getBrowserFor(person).click(actionElement)
			logging.info("(ok!) " + "click" + " -> " + actionPO)
		} else {
			logging.info("Oh, never mind! Just verified. " + actionPO + " got actioned.")
		}
					
		
		
		// var loaderResult = checkClass(person, "homePage.modalLoaderificContainer", "", "homePage.loaderClass")
		// logging.info("^^^^>  >>>>>> > >> >> " + loaderResult)
		
		// getBrowserFor(person).debug()
		
		getBrowserFor(person).pause(frameworkSettings.waitBetweenClicks)
		
		logging.info("(Post-Action) Verifier Visibility expected to be true => " + verifierPO + " : " + element.isVisible())
		
		attempt++
		return element.isVisible()

	}, ms)
	
};