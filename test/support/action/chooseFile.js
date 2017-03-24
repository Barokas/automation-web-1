/**
 * Upload file using a button's selector
 */

var profilePage 		= require('../pageObjects/profilePage.js');
var homePage 			= require('../pageObjects/homePage.js');
var frameworkSettings	= require('../settings/framework.js');

import {getBrowserFor, downloadGravatar} from './utils'
// import getRandomData from './getRandomData';

module.exports = (person, path, fileType, element, done) => {
	
	element = eval(element);
	
	if ( path === 'random') {
			
		path = downloadGravatar(profilePage.gravatarImageFormat)
		
	} else {

		path = eval(path);

	}

    // console.log("(chooseFile) elment: " + element)
    // console.log("(chooseFile) path: " + path)
	
    getBrowserFor(person).chooseFile(element, path);
	
	/* wait for the file to upload */
	getBrowserFor(person).pause(frameworkSettings.standardUploadTime);

    done();
};
