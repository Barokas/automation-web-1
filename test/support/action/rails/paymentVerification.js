/**
 * payment status checks on rails
 */

var winston = require('winston');

var homePage = require('../../pageObjects/homePage.js');
var profilePage = require('../../pageObjects/profilePage.js');
var taskDetailsPage = require('../../pageObjects/taskDetailsPage.js');
var frameworkSettings	= require('../../settings/framework.js');
var mainPage = require('../../pageObjects/ios/mainPage.js');
var railsMainPage = require('../../pageObjects/rails/railsMainPage.js');

var webdrivercss = require('webdrivercss-custom-v4-compatible')

import {getBrowserFor} from '../../action/utils'

module.exports = (person, done) => {
		
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(paymentVerification)");

	logging.info(getBrowserFor(person).getHTML("#tab-1 > div > div.block_content > table"))
	
	if (done) {
		done();
	}
    
};
