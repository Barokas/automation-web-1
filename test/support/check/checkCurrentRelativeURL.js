/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 * @param  {Function} done        Function to execute when finished
 */

var homePage = require('../pageObjects/homePage.js');

import {getCurrentURL} from '../action/utils'

module.exports = (person, falseCase, page, done) => {
	
	var expectedUrl;
	
	if (page.indexOf('global') > -1) {
	
		expectedUrl = eval(page)
		
	} else if (page.indexOf('DO_NOT_EVAL') > -1) {
		
		page = page.split("DO_NOT_EVAL")[1]
		expectedUrl = getExpectedURL(person, page)
		
		
	} else {
	
		page = eval(page);
	
		expectedUrl = getExpectedURL(person, page)
		
	}
	
    /**
     * The current browser window's URL
     * @type {String}
     */
    const currentUrl = getCurrentURL(person);
  
	// console.log("(checkCurrentRelativeURL) " + "<" + person + ">" + " currentUrl : " + currentUrl);
	// console.log("(checkCurrentRelativeURL) " + "<" + person + ">" + " page : " + page);
	// console.log("(checkCurrentRelativeURL) " + "<" + person + ">" + " expectedUrl : " + expectedUrl);
    
	if (falseCase) {
		
		// console.log("(checkCurrentRelativeURL) " + "<" + person + ">" + " CASE(1) : " + falseCase);
		
        currentUrl.should.not
            .equal(expectedUrl, `expected url not to be "${currentUrl}`);
    } else {
		
		// console.log("(checkCurrentRelativeURL) " + "<" + person + ">" + " CASE(2) : " + falseCase);
		
		if (currentUrl != expectedUrl) {
			
			assert.fail(1, 2, "Expected CurrentURL to be " + expectedUrl + " but found " + currentUrl, '###');
		
		}	
			
    }

	/* 
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/
	
	if (done) {
		
		done();
	} 
	
};

function getExpectedURL(person, page) {
	
	var url = '';
	
	if ((person === 'I') || (person === 'Both')){
		
		url = browser.options.baseUrl + page;
		
	} else {
		
		url = browser.select(person).options.baseUrl + page;
	}
	
	return url;
}