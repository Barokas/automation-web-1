/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   elem          Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 * @param  {Function} done          Function to execute when finished
 */

var winston = require('winston');

var homePage = require('../pageObjects/homePage.js');
var profilePage = require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');
var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor} from '../action/utils'

module.exports = (person, isCSS, attrName, elem, falseCase, expectedValue, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(checkProperty)");
	
	var rawElemPO = elem
	elem = eval(elem)
	
	// taking a breath between checks
	getBrowserFor(person).pause(frameworkSettings.minPause)
	
    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    const command = isCSS ? 'getCssProperty' : 'getAttribute';

	
    /**
     * Te label to identify the attribute by
     * @type {String}
     */
    const attrType = (isCSS ? 'CSS attribute' : 'Attribute');

    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let attributeValue = getBrowserFor(person)[command](elem, attrName);

    /**
     * when getting something with a color WebdriverIO returns a color
     * object but we want to assert against a string
     */
    if (attrName.indexOf('color') > -1) {
        attributeValue = attributeValue.value;
    }

    if (falseCase) {
        expectedValue.should.not
            .equal(
                attributeValue,
                `${attrType} of element "${elem}" should not contain ` +
                `"${attributeValue}"`
            );
    } else {
        expectedValue.should
            .equal(
                attributeValue,
                `${attrType} of element "${elem}" should not contain ` +
                `"${attributeValue}", but "${expectedValue}"`
            );
    }

    done();
};
