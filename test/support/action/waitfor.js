/**
 * Wait for the given element to be checked, enabled, selected, visible, contain
 * a text, contain a value or to exist
 * @param  {String}   elem                     Element selector
 * @param  {String}   obsolete                 Duration prefix (unused)
 * @param  {String}   ms                       Wait duration (optional)
 * @param  {String}   isWaitingOnSpecificState Wait for a specific state (else
 *                                             wait for existence)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 * @param  {Function} done                     Function to execute when finished
 */

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'

module.exports =
(person, elem, obsolete, ms, isWaitingOnSpecificState, falseState, state, done) => {
    /**
     * Maximum number of milliseconds to wait, default 3000
     * @type {Int}
     */
    const intMs = parseInt(ms, 10) || parseInt(frameworkSettings.waitForTimeOut, 10);

	var rawElemPO = elem
	elem = eval(elem)
	
	console.log("[" + person + "] " + "(waitFor) " + "(" + intMs + " ms" + ")" + " :LOOK: " + rawElemPO)
	
    /**
     * Command to perform on the browser object
     * @type {String}
     */
    let command = 'waitForExist';

    /**
     * Boolean interpretation of the false state
     * @type {Boolean}
     */
    let boolFalseState = !!falseState;

    /**
     * Parsed interpretation of the state
     * @type {String}
     */
    let parsedState = '';

    if (isWaitingOnSpecificState) {
        parsedState = state.indexOf(' ') > -1
                    ? state.split(/\s/)[state.split(/\s/).length - 1]
                    : state;

        // Check box checked state translates to selected state
        if (parsedState === 'checked') {
            parsedState = 'selected';
        }

        command = `waitFor${parsedState[0].toUpperCase()}` +
                    `${parsedState.slice(1)}`;
    }

    if (typeof falseState === 'undefined') {
        boolFalseState = false;
    }
	
	console.log("(waitfor) command: " + command)
	console.log("(waitfor) elem: " + elem)
	console.log("(waitfor) intMs: " + intMs)

    getBrowserFor(person)[command](elem, intMs, boolFalseState);
	
	console.log("[" + person + "] " + "(waitFor) " + "(" + intMs + " ms" + ")" + " :BUZZ: " + rawElemPO)
	
    done();
};
