/**
 * Open the given URL
 * @param  {String}   person The browser instance to use
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */

var winston = require('winston');

import {getBrowserFor} from './utils'

module.exports = (person, type, page, done) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(openWebsite)");
		
	var url = getCorrectURL(person, type, page);
	
	logging.info("URL returned: " + url)
	// console.log("type: " + type);
	// console.log("page: " + page);
	// console.log("finalURL: " + url);
	// console.log("authPass: " + authPass);
	
	getBrowserFor(person).url(url);
	
    try {
		
		if (url.indexOf('stage') > -1) {
		    getBrowserFor(person).alertText(getAuthPassword(person));
			getBrowserFor(person)['alertAccept']();
		}
		
		if (url.indexOf('development') > -1) {
		    getBrowserFor(person).alertText(getAuthPassword(person));
			getBrowserFor(person)['alertAccept']();
		}
    
		if (url.indexOf('frontend.dev') > -1) {
		    getBrowserFor(person).alertText(getAuthPassword(person));
			getBrowserFor(person)['alertAccept']();
		}
		
	} catch (e) {
		/* 
			need a better way to ignore the prompt
		   	since above failure generates a screenshot
		   	that is not desirable 
		*/
    }
	
	done();

};

function getCorrectURL(person, type, page) {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(openWebsite -> getCorrectURL)");
	
	var url = '';
	
	logging.info("type: " + type)
	logging.info("page: " + page)
	
	if ( type == 'rails' ) {
			
		if (page.indexOf("user") > -1) { // ASSUMES USER ID RETRIEVED FROM A GOOGLE SHEET
				
				page = page.split(".")[1]
				page = '/users/' + eval('global.' + page)

		}
			
		if ((person === 'I') || (person === 'Both')){
		
			url = browser.options.railsUrl + page;
		
		} else {
		
			url = browser.select(person).options.railsUrl + page;
		}
		
		return url;
		
	}
	
	if ((person === 'I') || (person === 'Both')){
		
		url = (type === 'url') ? page : browser.options.baseUrl + page;
	logging.info("URL here: " + url)
		
	} else {
		
		url = (type === 'url') ? page : browser.select(person).options.baseUrl + page;
	}
	

	return url;
}

function getAuthPassword(person) {
	
	var authPass = '';	
	
	if ((person === 'I') || (person === 'Both')){
		
		authPass = browser.options.basicAuthPassword;	
		
	} else {
		
		authPass = browser.select(person).options.basicAuthPassword;	
	}
	
	return authPass;
}
