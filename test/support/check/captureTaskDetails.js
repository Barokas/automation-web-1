/**
 * Capture Task ID from CurrentURL and store it
 * @param  {String}   person		The browser instance to use
 * @param  {Function} done          Function to execute when finished
 */

var winston 			= require('winston');
var frameworkSettings	= require('../settings/framework.js');

import {getCurrentURL, getBrowserFor} from '../action/utils'

module.exports = (
    person, done
) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(captureTaskDetails)");
	
	var waitMs = frameworkSettings.waitforCurrentURL
	var myTasksSeparator = browser.select(person).options.myTasksSeparator

	winston.profile("[" + person + "] " + "(captureTaskDetails)")
	getBrowserFor(person).waitUntil(function () {
	  return getCurrentURL(person).indexOf(myTasksSeparator) > -1
	}, waitMs, 'expected to get correct Task URL but nope');
	winston.profile("[" + person + "] " + "(captureTaskDetails)")
	
	global.taskURL = getCurrentURL(person)
	
	var slug = getSlug(global.taskURL, myTasksSeparator)
	global.railsCurrentTaskURL = browser.select(person).options.railsTasksListUrl + slug
	
	
	logging.info(global.taskURL)
	// logging.info(global.railsCurrentTaskURL)

	done()
};

function getSlug(fullURL, myTasksSeparator) {
	return fullURL.split(myTasksSeparator)[1]
}