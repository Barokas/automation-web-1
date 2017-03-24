/**
 * Select an option of a select element
 * @param  {String}   selectionType  Type of method to select by (name, value or
 *                                   text)
 * @param  {String}   selectionValue Value to select by
 * @param  {String}   selectElem     Element selector
 * @param  {Function} done           Function to execute when finished
 */

var winston = require('winston');


var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
// var railsMainPage 	= require('../pageObjects/rails/railsMainPage.js');


import {getBrowserFor, getRandomData} from './utils'

module.exports = (person, selectionType, selectionValue, selectElem, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(selectOption)");
	
	var rawElemPO = selectElem	
	selectElem = eval(selectElem);
	
    /**
     * Arguments to pass to the selection method
     * @type {Array}
     */
    const commandArguments = [
        selectElem,
        selectionValue,
    ];

    /**
     * The select element
     * @type {Object}
     */
    const element = getBrowserFor(person).element(selectElem);

    /**
     * The method to use for selecting the option
     * @type {String}
     */
    let command = '';

    switch (selectionType) {
        case 'name' : {
            command = 'selectByAttribute';

            // The selectByAttribute command expects the attribute name as it
            // second argument so let's add it
            commandArguments.splice(1, 0, 'name');

            break;
        }

        case 'value' : {
            command = 'selectByValue';
            break;
        }

        case 'text' : {
            command = 'selectByVisibleText';
            break;
        }

        default: {
            throw new Error(`Unknown selection type "${selectionType}"`);
        }
    }

    element[command].apply(this, commandArguments);

    done();
};
