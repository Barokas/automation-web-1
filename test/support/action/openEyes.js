/**
 * Open the Eyes Instance
 */

import {getBrowserFor} from './utils'

module.exports = (
    person, page, done
) => {
	
	console.log("(openEyes) Opening the Eyes for: " + person)
	
	getBrowserFor(person).EyesOpen(page);
	global.eyesIsOpen = true
	
	done()
};
