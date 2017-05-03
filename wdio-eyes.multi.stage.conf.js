var config 				= require('./wdio-eyes.multi.conf.js').config;

var merge 				= require('deepmerge');
var airtaskerDomain 	= require('./wdio.conf.js').airtaskerDomain;
var httpProtocol		= require('./wdio.conf.js').httpProtocol;
var myTasksSeparator	= require('./wdio.conf.js').myTasksSeparator;

var browserstack_username	= require('./wdio.conf.js').browserstack_username;
var browserstack_password	= require('./wdio.conf.js').browserstack_password;

var chosenConfig 	= ''
var environment		= 'prod'
var subDomain		= environment

var browserstackResolution	= process.env.resolution || '1600x1200';
var browserstackSessionName = process.env.feature || 'default-';

config.basicAuthPassword 		= ''
config.baseUrl 	= process.env.baseUrl || httpProtocol + '://' + 'www.' + airtaskerDomain + '.com';
config.myTasksSeparator = myTasksSeparator

config.specs = [
    './test/features-multiremote/post_task_as_guest.feature'
];

global.actorlist = config.capabilities = {
	
	// https://www.browserstack.com/automate/capabilities
	// https://www.browserstack.com/automate/webdriverio   

	
	
    Poster: {
		
			desiredCapabilities: {

				os: 'OS X',
				os_version: 'El Capitan',
				browserName: 'chrome',
				browser_version: '55.0',
				resolution: browserstackResolution,
				build: 'Stage',
				project: 'Airtasker Web',
				'browserstack.idleTimeout': '300',
				name: browserstackSessionName + '-poster'
        	},

    		emailID: '',
    		password: ''
	},
	
    Worker: {
		
			desiredCapabilities: {
				os: 'OS X',
				os_version: 'El Capitan',
				browserName: 'chrome',
				browser_version: '55.0',
				resolution: browserstackResolution,
				build: 'Stage',
				project: 'Airtasker Web',
				'browserstack.idleTimeout': '300',
				name: browserstackSessionName + '-worker'
           	},

    		emailID: '',
    		password: ''
    }
	
};



var browserStackDeviceLabConfig = {
	
	services: ['selenium-standalone'],
	user: browserstack_username,
    key: browserstack_password
	
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
	
} else if ( process.env.platform === 'saucelabs' ) {
	
	chosenConfig = sauceDeviceLabConfig

} else {

	chosenConfig = localConfig

}

exports.config = merge(config, chosenConfig);

