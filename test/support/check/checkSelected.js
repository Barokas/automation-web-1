/**
 * Check the selected state of the given element
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or
 *                              not
 * @param  {Function} done      Function to execute when finished
 */

var winston = require('winston');

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
// var railsMainPage = require('../pageObjects/rails/railsMainPage.js');
var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'

module.exports = (person, elem, falseCase, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(checkSelected)");
	
	var rawElemPO = elem
	elem = eval(elem)
	
	// taking a breath between checks
	getBrowserFor(person).pause(frameworkSettings.minPause)
	
    /**
     * The selected state
     * @type {Boolean}
     */
    const isSelected = getBrowserFor(person).isSelected(elem);

    if (falseCase) {
        isSelected.should.not
            .equal(true, `"${elem}" should not be selected`);
    } else {
        isSelected.should.equal(true, `"${elem}" should be selected`);
    }

    done();
};
