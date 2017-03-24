var httpreq     = require('httpreq')
var chance      = require('chance').Chance()
var faker 		= require('faker')

var frameworkSettings	= require('../settings/framework.js')
var homePage			= require('../pageObjects/homePage.js')
var winston 			= require('winston');

import isVisible from '../../support/check/isVisible'
import Gen from 'sentence-generator'

export function getBrowserFor(person) {
	
	/**
	 * Get Browser instance for a given Person
	 * @param  {String}   person   Person/Actor for whom the Browser is required
 	*/
	
	return (person === 'Both' || person === 'I') ? browser : browser.select(person);

}


export function getCurrentURL(person) {

	/**
	 * Get Browser instance for a given Person
	 * @param  {String}   person   Person/Actor for whom the Browser is required
 	*/

	var url = '';
	
	if ((person === 'I') || (person === 'Both')){
		
		url = browser.url().value;
		
	} else {
		
		url = browser.select(person).url().value;
	}
	
	global.currentURL = url
	
	return url;
	
}

export function downloadGravatar(imageFormat) {
	
	// https://scotch.io/tutorials/generate-fake-data-for-your-javascript-applications-using-faker
	// http://plnkr.co/edit/LZKfcdlLDtLtfSMJw0Dr?p=preview
	
	var downloadDirectory = __dirname + frameworkSettings.randomImagesDir
	var downloadFilePath  = downloadDirectory + 'random-profile' + "." + imageFormat
	
	var avatarURL = faker.image.avatar();
	
	// console.log("(utils.downloadGravatar) imageFormat: " + imageFormat)
	// console.log("(utils.downloadGravatar) avatar: " + avatarURL)
	// console.log("(utils.downloadGravatar) downloadFilePath: " + downloadFilePath)
   
	httpreq.download(
	  avatarURL,
		 downloadFilePath
	, function (err, progress){
	  if (err) return console.log(err);
	  // console.log(progress);
	}, function (err, res){
	  if (err) return console.log(err);
	  // console.log(res);
	});
	
	return downloadFilePath;
	
}

export function getRandomData(type) {

    var data
	
    var drinks = {
		
        'title': function () {
			
			const gen = Gen('assets/title-pool.txt')
			
			data = gen.take(1)
			return data
		

        },
		
        'sentence': function () {
			
			const gen = Gen('assets/word-pool.txt')
			
			data = gen.run()
			return data
		

        },
		
        'paragraph': function () {

			const gen = Gen('assets/word-pool.txt')
			
			data = gen.take(3)
			return data
			
	    },
		
        'email': function () {

			data = chance.email()
			return data
			
	    },
       
        'password': function () {

			data = chance.word({length: 6})
			return data
			
	    },
		
        'firstName': function () {

			data = chance.first()
			return data
			
	    },
		
        'lastName': function () {

			data = chance.last()
			return data
			
	    },
		
        'mobileNumber': function () {

			data = '6666666666'
			return data
			
	    },
		
        'address': function () {

			data = chance.address()
			return data
			
	    },
		
        'zip': function () {

			data = chance.zip()
			return data
			
	    },
		
        'city': function () {

			data = chance.zip()
			return data
			
	    },
		
        'state': function () {

			data = chance.state({ full: true })
			return data
			
	    },
		
        'default': function () {
            data = 'Default Random Text'
        }
		
    };
	
    return (drinks[type] || drinks['default'])()
	
	
}

export function checkSiteAlerts(person, type) {

    var data
	
    var drinks = {
		
        'Airtasker': function () {
			
			var logging = require('winston-annotate')(winston, "[" + person + "] " + "(utils.checkSiteAlerts)")
			
			data = ''
			
			var element = homePage.siteAlertButton
    		const isTermsButtonVisible = getBrowserFor(person).isVisible(element)
   		 	
    		var logMsg = isTermsButtonVisible ? " is visible" : " not visible"
			
			logging.verbose(element + logMsg)
			
			getBrowserFor(person).options.termsAlertVisible = isTermsButtonVisible ? true : false
			
			return data;

        },
		
        'default': function () {
            data = 'Nothing to do'
        }
		
    };
	
    return (drinks[type] || drinks['default'])()
	
	
}

export function clickVerifyAndRepeat(person, actionElement, verifierElement) {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(utils.clickVerifyAndRepeat)")
	
	var actionPO = actionElement //store
	var verifierPO = verifierElement //store
	
	actionElement = eval(actionElement)
	verifierElement = eval(verifierElement)
	
	const element = getBrowserFor(person).element(verifierElement);
	const ms = parseInt(frameworkSettings.verifyActionTimeOut, 10)
	
	var attempt = 1
	
	getBrowserFor(person).waitUntil(function() {
		
    	const actionElementIsVisible = getBrowserFor(person).isVisible(actionElement)
		logging.info("(Pre-Action) Action Visibility expected to be true => " + actionPO + " : " + actionElementIsVisible)				
		const verifierElementIsVisible = element.isVisible()
		
		if (!actionElementIsVisible && verifierElementIsVisible) {
			logging.info("OK. Retreat!")
			return true
		}
		
		logging.info("(try) " + "click" + " -> " + actionPO + " Attempt # " + attempt)
				
		getBrowserFor(person).pause(frameworkSettings.waitBetweenClicks)
		
		if (getBrowserFor(person).isVisible(actionElement) && !getBrowserFor(person).isVisible(verifierElement)) {
			getBrowserFor(person).click(actionElement)
			logging.info("(ok!) " + "click" + " -> " + actionPO)
		} else {
			logging.info("Oh, never mind! Just verified. " + actionPO + " got actioned.")
		}
			
		getBrowserFor(person).pause(frameworkSettings.waitBetweenClicks)
		
		logging.info("(Post-Action) Verifier Visibility expected to be true => " + verifierPO + " : " + element.isVisible())
		
		attempt++
		return element.isVisible()

	}, ms)
		
}