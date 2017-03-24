/**
 * Get Random Test (Fake) Data
 */

var httpreq     = require('httpreq');
var chance      = require('chance').Chance();
var faker 		= require('faker');

var frameworkSettings	= require('../settings/framework.js');


module.exports = (imageFormat, done) => {
	
	// console.log("(getRandomData) imageFormat " + imageFormat);
//
// 	// https://scotch.io/tutorials/generate-fake-data-for-your-javascript-applications-using-faker
// 	// http://plnkr.co/edit/LZKfcdlLDtLtfSMJw0Dr?p=preview
// 	// /Users/kanak/repos/automation/at-ui-aut/tests/boilers/assets/images/random/random-profile.jpg
//
// 	var downloadDirectory = __dirname + frameworkSettings.randomImagesDir
// 	var downloadFilePath  = downloadDirectory + 'random-profile' + "." + imageFormat
//
// 	var avatarURL = faker.image.avatar();
//
// 	// console.log("(getRandomData) imageFormat: " + imageFormat)
// 	// console.log("(getRandomData) avatar: " + avatarURL)
// 	// console.log("(getRandomData) downloadFilePath: " + downloadFilePath)
//
// 	httpreq.download(
// 	  avatarURL,
// 		 downloadFilePath
// 	, function (err, progress){
// 	  if (err) return console.log(err);
// 	  // console.log(progress);
// 	}, function (err, res){
// 	  if (err) return console.log(err);
// 	  console.log(res);
// 	});
//
// 	return downloadFilePath;
	
};