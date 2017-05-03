/**
 * Login to or Logout of an application
 * current application value
 * @param  {String}   person		    The person instance to use
 * @param  {String}   action            The action to perform (login or logout)
 * @param  {String}   application       eg., Airtasker, TGG-Portal etc
 * @param  {Function} done              Function to execute when finished
 */

var winston 			= require('winston');
var homePage			= require('../pageObjects/homePage.js');
// var railsMainPage		= require('../pageObjects/rails/railsMainPage.js');
var taskDetails 		= require('../pageObjects/taskDetails.js');
var frameworkSettings	= require('../settings/framework.js');
var homePage = require('../pageObjects/homePage.js');

import {getBrowserFor, getRandomData, clickVerifyAndRepeat} from './utils'
import isVisible from '../../support/check/isVisible';
import checkCurrentRelativeURL from '../../support/check/checkCurrentRelativeURL';
import checkContent from '../../support/check/checkContent';
import clickElement from '../../support/action/clickElement';
import waitForVisible from '../../support/action/waitForVisible';
import doAndVerifyAction from '../../support/action/doAndVerifyAction';

import {checkSiteAlerts} from '../action/utils'

module.exports = (person, verb, action, crutches, application, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(personaLogin)");
	

	
	if (application === 'Airtasker' && action === 'in') {
		
		var emailID  = getBrowserFor(person).options.emailID;
		var password = getBrowserFor(person).options.password;
	
		logging.silly(person + " will be logged " + action + " " + crutches + " the application " + application)
		logging.silly(person + " will be using the credentials: " + emailID + " / " + password)
			
		waitForVisible(person, "homePage.loginLink_landing_page")
		
		var loginLink = "homePage.loginLink_landing_page"
		var emailInput = "homePage.emailInput"	

		clickVerifyAndRepeat(person, loginLink, emailInput)
		// doAndVerifyAction(person, "clicks", "button", loginLink, "element", emailInput)

		getBrowserFor(person).setValue(homePage.emailInput, emailID)
		
		waitForVisible(person, "homePage.passwordInput")
		getBrowserFor(person).setValue(homePage.passwordInput, password)
	
		waitForVisible(person, "homePage.loginButton")
		clickElement(person, "click", "button", "homePage.loginButton", false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)
		
		isVisible(person, "homePage.errorMessage", true, false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)
		waitForVisible(person, "homePage.menu")
		checkCurrentRelativeURL(person, false, "homePage.dashboard_URL", false)
		
		checkSiteAlerts(person, 'Airtasker')
		
		// assert.isNotOk('everything5', 'this will fail here');
		
	} else if (application === 'Airtasker' && action === 'out'){
		waitForVisible(person, "homePage.menu")
		getBrowserFor(person).pause(frameworkSettings.maxPause)
		clickElement(person, "click", "button", "homePage.menu", false)
		
		waitForVisible(person, "homePage.logoutButton")
		getBrowserFor(person).pause(frameworkSettings.maxPause)
		clickElement(person, "click", "button", "homePage.logoutButton", false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)
		
		isVisible(person, "homePage.errorMessage", true, false)
		waitForVisible(person, "homePage.loginLink_landing_page")
		checkCurrentRelativeURL(person, false, "homePage.root_URL", false)	
		
	} else if (application === 'Airtasker' && verb === 'sign' && action === 'up') {
		
		var random_email = getRandomData("email")
		var random_password = getRandomData("password")
		
		waitForVisible(person, "homePage.signupLink_landing_page")
		clickElement(person, "click", "button", "homePage.signupLink_landing_page", false)
		
		waitForVisible(person, "homePage.emailInput")
		getBrowserFor(person).setValue(homePage.emailInput, random_email)
		logging.info("Signup with Email: " + random_email)
		
		waitForVisible(person, "homePage.passwordInput")
		getBrowserFor(person).setValue(homePage.passwordInput, random_password)
		logging.info("Signup with Password: " + random_password)
	
		waitForVisible(person, "homePage.signupButton")
		clickElement(person, "click", "button", "homePage.signupButton", false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)

		isVisible(person, "homePage.errorMessage", true, false)

		getBrowserFor(person).pause(frameworkSettings.medPause)
		
		waitForVisible(person, "homePage.userRegistrationForm")
		// getBrowserFor(person).debug()
		checkCurrentRelativeURL(person, false, "homePage.postSignup_registration_URL", false)
		checkContent(person, "element", "homePage.userRegistrationHeader", "", "text", "homePage.signupSuccessMessage", false)
		
		
	} else if (application === 'Rails' && action === 'in'){
		
		var emailID  = getBrowserFor(person).options.emailID;
		var password = getBrowserFor(person).options.password;
	
		// console.log(person + " will be logged " + action + " " + crutches + " the application " + application);
		// console.log(person + " will be using the credentials: " + emailID + " / " + password);
		
		waitForVisible(person, "railsMainPage.emailInput")
		getBrowserFor(person).setValue(railsMainPage.emailInput, emailID)
		waitForVisible(person, "railsMainPage.passwordInput")
		getBrowserFor(person).setValue(railsMainPage.passwordInput, password)
	
		waitForVisible(person, "railsMainPage.loginButton")
		clickElement(person, "click", "button", "railsMainPage.loginButton", false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)
		
		isVisible(person, "railsMainPage.errorMessage", true, false)
		
		getBrowserFor(person).pause(frameworkSettings.medPause)
		waitForVisible(person, "railsMainPage.menu")

		logging.silly(global.railsCurrentTaskURL)
		getBrowserFor(person).url(global.railsCurrentTaskURL);

	} else if (application === 'Facebook' && action === 'in'){
		
		var emailID  = getBrowserFor(person).options.facebookLoginEmail;
		var password = getBrowserFor(person).options.facebookLoginPassword;
	
		logging.silly(person + " will be logged " + action + " " + crutches + " the application " + application);
		logging.silly(person + " will be using the credentials: " + emailID + " / " + password);
		
		waitForVisible(person, "homePage.facebookLoginEmail")
		getBrowserFor(person).setValue(homePage.facebookLoginEmail, emailID)
		waitForVisible(person, "homePage.facebookLoginPassword")
		getBrowserFor(person).setValue(homePage.facebookLoginPassword, password)
	
		waitForVisible(person, "homePage.facebookLoginButton")
		clickElement(person, "click", "button", "homePage.facebookLoginButton", false)
		
	} else {
		
		assert.fail(1, 2, "No instructions available to log " + action + " " + crutches + " the application " + application, '###')
	}
		
	
    done();
};
