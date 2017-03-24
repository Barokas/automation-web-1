/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss,
 *                              text)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 * @param  {Function} done      Function to execute when finished
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');

import {getBrowserFor} from './utils'
import waitForVisible from './waitForVisible';

module.exports = (person, action, modalType, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(handleModal)");
	
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = `alert${action.slice(0, 1).toUpperCase()}${action.slice(1)}`;

    /**
     * Alert boxes can't be dismissed, this causes Chrome to crash during tests
     */
    if (modalType === 'alertbox') {
        command = 'alertAccept';
    }

    getBrowserFor(person)[command]();

    done();
};
