/**
 * Open / Navigate to a given Section
 * @param  {String}   person The browser instance to use
 * @param  {String}   portal Type of application (airtasker, tgg etc)
 * @param  {String}   section The page to navigate to
 * @param  {Function} done Function to execute when finished
 */

var homePage = require('../pageObjects/homePage.js');

import clickElement from './clickElement';
import isVisible from '../check/isVisible';
import checkCurrentRelativeURL from '../check/checkCurrentRelativeURL';
import waitForVisible from '../action/waitForVisible';
import {getBrowserFor} from './utils'

module.exports = (person, portal, section, done) => {
	
	// console.log("portal: " + portal);
	// console.log("section: " + section);
	
	navigateToAirtasker(person, section);
	
	
	done();

};


function navigateToAirtasker(person, section) {
    var drink
    var drinks = {
        'Profile': function () {
			
			clickElement(person, "click", "button", "homePage.menu", false)
			
			// WaitFor & Click 'Settings'
			waitForVisible(person, "homePage.settingsMenu", false, false)
			clickElement(person, "click", "button", "homePage.settingsMenu", false)
			
			// WaitFor & Click 'Profile'
			waitForVisible(person, "homePage.profileMenu", false, false)
			clickElement(person, "click", "button", "homePage.profileMenu", false)
			
			getBrowserFor(person).pause(200)
			isVisible(person, "homePage.errorMessage", true, false)
			getBrowserFor(person).pause(500)
			checkCurrentRelativeURL(person, false, "homePage.profile_URL", false)

        },
		
        'Dashboard': function () {
	
			clickElement(person, "click", "button", "homePage.menu", false)
			clickElement(person, "click", "button", "homePage.dashboardMenu", false)
    
	    },
		
        'Payments-History': function () {
	
			clickElement(person, "click", "button", "homePage.menu", false)
			clickElement(person, "click", "button", "homePage.PaymentsHistoryMenu", false)
       
        },
		
        'default': function () {
            drink = 'Default item'
        }
    };
    (drinks[section] || drinks['default'])()

}

