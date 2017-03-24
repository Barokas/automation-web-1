var config 				= require('./wdio-eyes.multi.conf.js').config;

var merge 				= require('deepmerge');
var airtaskerDomain 	= require('./wdio.conf.js').airtaskerDomain;
var httpProtocol		= require('./wdio.conf.js').httpProtocol;
var myTasksSeparator	= require('./wdio.conf.js').myTasksSeparator;

var browserstack_username	= require('./wdio.conf.js').browserstack_username;
var browserstack_password	= require('./wdio.conf.js').browserstack_password;

var chosenConfig 	= ''
var environment		= 'stage'
var subDomain		= environment

config.basicAuthPassword 		= ''
config.baseUrl 	= 'http://google.com';
config.myTasksSeparator = myTasksSeparator

config.specs = [
    './test/features-multiremote/post_task_as_guest.feature'
];

global.actorlist = config.capabilities = {
   
    Poster: {
		
			desiredCapabilities: {
				browserName: 'chrome',
				resolution: '1280x1024',
				build: 'Stage',
				project: 'Airtasker Web',
				name: 'full-feature-poster'
        	},

    		emailID: '',
    		password: ''
	},
	
    Worker: {
		
			desiredCapabilities: {
				browserName: 'chrome',
				resolution: '1280x1024',
				build: 'Stage',
				project: 'Airtasker Web',
				name: 'full-feature-worker'
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

