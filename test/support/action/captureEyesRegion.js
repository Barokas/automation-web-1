/**
 * Capture screenshot of a Region using Applitools Eyes API
 */

import {getBrowserFor} from './utils'

module.exports = (
    person, page, done
) => {
	
	// console.log("(captureEyes) Doing the Eyes for: " + person)
	// console.log("(captureEyes) Doing the Eyes  on: " + page)
	
    getBrowserFor(person).EyesCheckWindow(page);
	
	done()
};
