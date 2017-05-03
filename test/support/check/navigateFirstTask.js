/**
 * Navigates to the first task in the list
 */

var winston = require('winston')

var homePage = require('../pageObjects/homePage.js')
var profilePage = require('../pageObjects/profilePage.js')
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js')
var frameworkSettings	= require('../settings/framework.js')
var checkCurrentRelativeURL	= require('../../support/check/checkCurrentRelativeURL.js')

import {getBrowserFor} from '../action/utils'

module.exports = (person, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(navigateFirstTask)")

	var rawElemPO = "homePage.taskListItem"
	var elem = eval(rawElemPO)
	
	var attrName = eval("homePage.dataTaskId")
	
		
    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    var command = 'getAttribute'


    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let taskIdSlug = getBrowserFor(person)[command](elem, attrName)[0] //getting the first value


    var command = 'click'	
	getBrowserFor(person)[command](elem)
	getBrowserFor(person).pause(frameworkSettings.medPause)
	var page = "DO_NOT_EVAL" + "/tasks/" + taskIdSlug + "/"
	checkCurrentRelativeURL(person, '', page)

    done();
};
