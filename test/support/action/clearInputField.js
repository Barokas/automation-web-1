/**
 * Clear a given input field
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */

var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
// var railsMainPage	= require('../pageObjects/rails/railsMainPage.js');

import {getBrowserFor} from './utils'

module.exports = (person, element, done) => {
	
	element = eval(element);

    getBrowserFor(person).clearElement(element);

    done();
};
