/**
 * todo: claim a task
 * @param  {String}   person		The browser instance to use
 * @param  {Function} done          Function to execute when finished
 */

import {getBrowserFor} from './utils'

var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

// Load and instantiate Chance
var chance = require('chance').Chance();


module.exports = (
    person, done
) => {
	
	// console.log("Claiming Task")
	//
	// console.log("And the URL is: " + global.taskID)

	// Use Chance here.
	// var my_random_string = chance.string();
	// console.log("Random String ==> " + my_random_string)

	// getBrowserFor(person).click(taskDetailsPage.makeOfferButton);
	
	done()
};
