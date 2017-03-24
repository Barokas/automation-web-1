/**
 * Close the Eyes Instance
 */

import {getBrowserFor} from './utils'

module.exports = (
    person, page, done
) => {
	
	console.log("(closeEyes) Closing the Eyes for: " + person)
	
	getBrowserFor(person).EyesClose(page);
	// browser.select(person).EyesOpen(page)
	// global.eyesIsOpen = true
	
	done()
};
