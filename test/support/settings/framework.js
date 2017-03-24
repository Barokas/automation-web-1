var framework = {

	stepTimeout: '120000',
	randomImagesDir: '/../../../assets/images/random/',
	standardUploadTime: '3500',
	
	/* waitForVisible.js: Wait for the given element to become visible. Default: 10000 */
	waitForVisibleTimeOut: '10000',
	
	/* doAndVerifyAction.js & utils.clickVerifyAndRepeat: Wait for timeout. Default: 20000 */
	verifyActionTimeOut: '20000',
	
	/* waitfor.js: Wait for the given element to be checked, enabled, selected, visible, contain
 	 * a text, contain a value or to exist. Default: 3000 
	 */
	waitForTimeOut: '3000',
	
	/* wait before subsequent attempts
	 * ex: between repeated clicks
	*/
	waitBetweenClicks: '1200',
	
	/* waitforExist.js: Wait for the given element to come into existence in the DOM */
	waitForExistTimeOut: '12000',
	
	/* retry settings that are used in given/when/then js files */
	retryCountMin: 25,
	retryCountMed: 50,
	retryCountMax: 150,
	
	/* captureTaskDetails.js -> waits for URL to update. Default: 5000 */
	waitforCurrentURL: 5000,
	
	/* standard pauses 
	 * personaLogin.js
	 * checkClass.js
	 */
	minPause: 500,
	medPause: 1000,
	maxPause: 2000,
	
	// appPath: '../../../../assets/ipa/AirtaskerSTAGE.ipa'
	appPath: '../../../../assets/ipa/UICatalog.app.zip'
	
};

module.exports = framework;
