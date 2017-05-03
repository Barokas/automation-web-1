var merge 				= require('deepmerge');
var config 				= require('./wdio-eyes.conf.js').config;
var airtaskerDomain 	= require('./wdio.conf.js').airtaskerDomain;
var httpProtocol		= require('./wdio.conf.js').httpProtocol;
var railsTasksPage		= require('./wdio.conf.js').railsTasksPage;
var myTasksSeparator	= require('./wdio.conf.js').myTasksSeparator;

config.emailID = '';
config.password = '';

var chosenConfig 	= ''
var environment		= 'stage'
var subDomain		= environment
var subRailsDomain	= '-rails'

var browserstackResolution	= process.env.resolution || '1600x1200';
var browserstackSessionName = process.env.feature || 'default';

config.basicAuthPassword 		= ''
adminUser						= ''
adminPass						= ''
basicRailsAuth		 			= adminUser + ':' + adminPass

config.baseUrl 	= process.env.baseUrl || httpProtocol + '://' + subDomain + '.' + airtaskerDomain + '.com';
config.railsUrl = httpProtocol + '://' + basicRailsAuth + '@' + subDomain + subRailsDomain + '.' + airtaskerDomain + '.com' + '/admin';
config.railsTasksListUrl = config.railsUrl + railsTasksPage;
config.myTasksSeparator = myTasksSeparator

config.specs = [
    './test/features/worker_sign_up.feature',
    './test/features/sudo_mode.feature',
    './test/features/landing_pages_cta.feature',
    './test/features/login_with_facebook.feature'
];

global.actorlist = config.capabilities = [{
	

	// https://www.browserstack.com/automate/capabilities
	// https://www.browserstack.com/automate/webdriverio
	  'os': 'OS X',
	  'os_version': 'El Capitan',
	  'browserName': 'chrome',
	  'browser_version': '55.0',
	  'resolution': '1600x1200',
	  'browserstack.idleTimeout': '300',

	  // 'os': 'Windows',
	  // 'os_version': '10',
	  // 'browser': 'Chrome',
	  // 'browser_version': '55.0',
	  // 'resolution': '2048x1536',
	
	build: 'Stage',
	project: 'Airtasker Web',
	name: browserstackSessionName

}];

var browserStackDeviceLabConfig = {
	
	services: ['selenium-standalone'],
	user: "kanakkalburgi1",
    key: "PZeWzNPghiDnVqvF8eYz"
	
}

var sauceDeviceLabConfig = {
	
	services: ['selenium-standalone', 'sauce'],
	user: "kanak_n28",
    key: "0b86d311-3613-4f16-9639-b3d083c5c08c",
    sauceConnect: false
	
} 

var localConfig = {
	
	
}


if ( process.env.platform === 'browserstack' ) {
	
	chosenConfig = browserStackDeviceLabConfig

	// chosenConfig = browserStackDeviceLabConfig
	// console.log(browser.desiredCapabilities + "----------**********")
	
} else if ( process.env.platform === 'saucelabs' ) {
	
	chosenConfig = sauceDeviceLabConfig

} else {

	chosenConfig = localConfig

}

exports.config = merge(config, chosenConfig);