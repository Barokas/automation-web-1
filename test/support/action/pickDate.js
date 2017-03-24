/**
 * Pick a suitable date from the datepicker
 */

var winston = require('winston');

import pressButton from '../../support/action/pressButton';

module.exports = (person, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(pickDate)");
	
	
	pressButton(person, "keys.down", false)
	pressButton(person, "keys.right", false)
	pressButton(person, "keys.enter", false)

	   
	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	if (done) {

		done();
	}
};