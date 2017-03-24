/**
 * Hide the device keyboard
 * @param  {String}   person  The actor
 * @param  {Function} done    Function to execute when finished
 */

var winston = require('winston');

import {getBrowserFor} from '../utils'

module.exports = (person, done) => {
   
   	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(hideKeyboard)")
	
    // getBrowserFor(person).hideDeviceKeyboard('pressKey', 'Done') // doesn't work
    getBrowserFor(person).hideDeviceKeyboard()
    // getBrowserFor(person).hideDeviceKeyboard('tapOutside')
	
	logging.info("Keyboard Hidden")

};
