/**
 * Reload Page
 */

var winston = require('winston');

import {getCurrentURL} from './utils'

module.exports = (
    person, done
) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(reloadPage)");
	
   /**
    * The current browser window's URL
    * @type {String}
    */
   const currentUrl = getCurrentURL(person);
   
   
   
	if ((person === 'I') || (person === 'Both')){
		
		browser.url(currentUrl);
		
	} else {
		
		browser.select(person).url(currentUrl);
	}

	logging.info("Reloaded: " + currentUrl)
	
	done()
};
