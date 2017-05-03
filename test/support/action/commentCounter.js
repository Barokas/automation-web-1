/**
 * Track and Verify Comment Count on a Task
 *
 */

var winston = require('winston');

var homePage 		= require('../pageObjects/homePage.js');
var taskDetails 	= require('../pageObjects/taskDetails.js');
var profilePage 	= require('../pageObjects/profilePage.js');
var taskDetailsPage = require('../pageObjects/taskDetailsPage.js');

import {getBrowserFor} from './utils'

module.exports = (person, action, done) => {

	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(commentCounter)");
			
	var fullText
	var countPosition
	var expectedCommentCount
	var currentCommentCount
	
	if ( action === "records" ) {
		
		fullText = getBrowserFor(person).element(taskDetailsPage.commentCounter).getText()
		
		
		if ( fullText.substr("SHOW") > -1 ) {
			countPosition = 5
		} else {
			countPosition = 0
		}
		
		global.initialCommentCount = parseInt(fullText[countPosition]) // SHOW 1 COMMENTS
		
		logging.info("Initial Comment Count = " + global.initialCommentCount)
		
	} else if ( action === "verifies" ) {
		
		fullText = getBrowserFor(person).element(taskDetailsPage.commentCounter).getText()
		
		if ( fullText.substr("SHOW") > -1 ) {
			countPosition = 5
		} else {
			countPosition = 0
		}
		
		expectedCommentCount = parseInt(global.initialCommentCount) + 1
		currentCommentCount = parseInt(fullText[countPosition])
		
		// TODO refactor. Currently assuming comments incremented by 1
		
		// logging.info("Initial Comment Count = " + global.initialCommentCount)
		logging.info("Current Comment Count = " + currentCommentCount)
		logging.info("Expectd Comment Count = " + expectedCommentCount)

		
    currentCommentCount.should
        .equal(
            expectedCommentCount,
            `Total Comments expected to be ${expectedCommentCount} ` +
            `but found ${currentCommentCount} comment(s)`
        );
		
	}
		
    done();

};