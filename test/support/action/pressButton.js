/**
 * Perform a key press
 * @param  {String}   key  The key to press
 * @param  {Function} done Function to execute when finished
 */

var keys = require('../settings/keys.js');

import {getBrowserFor} from './utils'

module.exports = (person, key, done) => {
	
	var rawElemPO = key	
	key = eval(key);
	
    getBrowserFor(person).keys(key);

	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	if (done) {

		done()
	}
	
};
