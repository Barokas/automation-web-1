const Sumologic = require('logs-to-sumologic');
 
var collectorCode = 'Z'
 
var endpoint = 'https://collectors.au.sumologic.com/receiver/v1/http/'

var url = endpoint + collectorCode

const sumologic = Sumologic.createClient({
  url: url
});

var winston = require('winston')
var logging = require('winston-annotate')(winston, "(wdio.conf.js)")

var request 	= require('sync-request')
var jsonQuery 	= require('json-query')

var frameworkSettings = require('./test/support/settings/framework.js')
// cucumber step definition timeout
var stepTimeout = process.env.debug ? (24 * 60 * 60 * 1000) : frameworkSettings.stepTimeout

// var newrelicWinston = require('newrelic-winston')
// var newrelic = new(winston.Logger)({
//         exitOnError: false,
//         transports: [new(newrelicWinston)({ env: 'prod' })]
//       });


	  var sumocb = function (err, res) {
	    if (err) {
	      // handle error 
			// console.log("SUMO did not wake up")
	    }
	    // handle success 
		// console.log("SUMO SUCCESS")
	  };
	  
// All options go here, to allow easier boilerplating.
var options = {

  // webdrivercss: {
  //   screenshotRoot: 'visual/reference',
  //   failedComparisonsRoot: 'visual/failed',
  //   misMatchTolerance: 0.05,
  //   // screenWidth: [1024]
  // }
};

var errorLogs = []



exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        // ' ./test/features/title.feature'
        './test/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 5,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
		
	 
		        
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://127.0.0.1:8080',
    //
    // Default timeout for all waitFor* commands.
	// see settings/framework.js instead
	// also see waitForVisible.js
	// read https://github.com/webdriverio/webdriverio/blob/master/docs/guide/testrunner/timeouts.md
    // waitforTimeout: 111,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    plugins: {
		
		'wdio-screenshot': {}
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
	
	services: ['selenium-standalone'],
    	
	//
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['spec', 'junit'],
	reporterOptions: {
		allure: {
			outputDir: 'allure-results'
		},
		outputDir: process.env.CI_TEST_REPORTS_DIR + '/cucumber',
	    outputFileFormat: function(opts) { // optional
	        return `results-${opts.cid}.${opts.capabilities}.xml`
	    }
	},
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: [
            './test/steps/given.js',
            './test/steps/then.js',
            './test/steps/when.js'
        ],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [
            'js:babel-register'
        ],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: require('./test/tagProcessor'),           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: stepTimeout,     // <number> timeout for step definitions. Eyes tests require a lot more!
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    // onPrepare: function (config, capabilities) {
    // },
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    before: function () {
		
        /**
         * Setup the Chai assertion framework
         */
        var chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
		  
    },
	
	//    beforeFeature: function (scenario) {
	//
	//
	// },

    // afterScenario: function (feature) {
    //
    //
    // },
	
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    afterCommand: function (commandName, args, result, error) {
		
		if ( error ) {

			// logging.error(commandName + " -> " + args + " : " + error)
			// newrelic.error("Bazooka Error Local")
			// newrelic.error(commandName + " -> " + args + " : " + error)
			
			sumologic.log(commandName + " -> " + args + " : " + error, sumocb);
			
			
			// var actor = global.actor
			
			// doesn't work due to plugin issue. waiting for fix.
			// getBrowserFor(actor).saveElementScreenshot('great-shot-document.png', args)
			
			// if (args.indexOf(String("12000,")) == -1) {
			//
			// 	if (typeof args != "number") {
			//
			// 		logging.info(args + args.indexOf("12000,") + " is not a number?? " + isNaN(Number(args)))
			//
			// 		webdrivercss.init(getBrowserFor(actor), options.webdrivercss);
			//
			// 		logging.info("I will be screenshotting on browser of: " + actor)
			// 		getBrowserFor(actor).webdrivercss('shot', [
			// 			{
			// 	    		elem: args,
			// 	    		name: commandName+args
			// 			}
			// 		]);
			// 	}
			// }
				
		}
   	 
    },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // afterTest: function (test) {
    // },
    //
    // Hook that gets executed after the suite has ended
	//     afterSuite: function (suite) {
	// },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
		//     after: function (result, capabilities, specs) {
		//
		// printSessionURL()
		//
		// logging.info("Executed Feature: " + specs) // gives me feature file name in json
		//
		// // newrelic.error("After Everything")
		//
		//     },
			
			afterStep: function (stepResult) { //eslint-disable-line object-shorthand
			        /**
			         * Assign current step data to variables for error logging purposes
			         */
			        feature = stepResult.getStep().getScenario().getFeature().getName();
			        scenario = stepResult.getStep().getScenario().getName();
			        step = stepResult.getStep().getName();
			        status = stepResult.getStatus();
			        /**
			         * If the step passes or is skipped, skip browser console logging.
			         */
			        if (status !== `failed`) {
			            return;
			        }
					
					sumologic.log("Step Failure Summary (feature | scenario | step) = " + feature + " | " + scenario + " | " + step, sumocb);
					
					// newrelic.error("Relic afterStep Errors")
					// newrelic.error(feature.toString())
					
		            errorLogs.push({
		                // name: `${status}: ${feature} -> ${scenario} -> ${step}`,
						name: `${feature} -> ${scenario} -> ${step}`,
						
		                message: "There was a failure. Do not RIP.",
		            });
					
			        /**
			         * gets the current browser logs from selenium and assigns them to a variable
			         */
			        // var logs = browser.log('browser');
			        /**
			         * Filters out everything except error messages and adds step/scenario/feature info to the errorLogs array
			         */
					
					
						// 			        logs.value.forEach(log => {
						//
						// console.log("Pushing once")
						//
						// 			            /**
						// 			             * only print error messages
						// 			             */
						// 			            if (!log || typeof log.level !== 'string' || log.level.toLowerCase() !== 'severe') {
						// 			                // return;
						// 			            }
						// 			            /**
						// 			             * Assign time error was incurred to a variable
						// 			             */
						// 			            timestamp = log.timestamp.toString();
						// 			            /**
						// 			             * Add The test path and browser console message to the errorLogs array
						// 			             */
						// 			            errorLogs.push({
						// 			                name: `${status}: ${feature} ${scenario} ${step}`,
						// 			                message: log.message,
						// 			            });
						// 			        });

			    },
				
		    after: function (_, capabilities) { //eslint-disable-line object-shorthand
				
				// newrelic.error("Absolutely")
				logging.info("Not sure why it's not happening here.")
				
				var theFeature = feature.toString()
				printSessionURL()

				sumologic.log("Executed Feature Summary (feature | scenario) = " + theFeature + " | " + scenario, sumocb);
				
				// logging.info("Executed Feature: " + feature)
				
				// newrelic.error("Other Errors") // proven
				
				/**
		         * Skip if there are no errors to report
		         */
				
				logging.info("error length = " + errorLogs.length)
				
				if (errorLogs.length > 0) {
				//
				// 	// console.log("Error in feature: " + theFeature)
				// 	newrelic.error("Caught Error. Print Feature.")
					sumologic.log("Failed Feature Summary (feature | scenario) = " + theFeature + " | " + scenario, sumocb);
				
				// 	// newrelic.error(theFeature)
				//
				}

		        /* eslint-disable no-console */
		        // console.log('====> SEVERE BROWSER LOGS OF FAILING TESTS <====');
		        // console.log('Feature:', feature);
		        // console.log('Scenario:', scenario);
		        // console.log('Step:', step);
				
				// logging.info("Typeof feature: " + typeof feature)

				// newrelic.error(feature)
				// newrelic.error(log.name)
		        
		        // console.log('TimeStamp:', timestamp);
		        // console.log('Capabilities:', capabilities);

						// 		        errorLogs.forEach((log, i) => {
						// 		            if (i === 0 || errorLogs[i - 1].name !== log.name) {
						// 		                console.log('\n>', log.name);
						// newrelic.error(log.name);
						// logging.info("Typeof log.name: " + typeof log.name)
						// 		            }

		            // console.log('BROWSER CONSOLE LOG:', log.message);
		        // });
		        // console.log('====> END OF BROWSER LOGS <====');
		        /* eslint-enable no-console */
		    },		
	
	
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
	// onComplete: function(exitCode) {
	// }
};

global.contentAsset = []

exports.airtaskerDomain = "airtasker"
exports.httpProtocol = "https"

exports.myTasksSeparator = "my-tasks"
exports.railsTasksPage = "/tasks"
exports.railsUsersPage = "/users"
exports.railsCouponsPage = "/campaigns"

var browserstack_username 	= "kanakkalburgi1"
var browserstack_password 	= "PZeWzNPghiDnVqvF8eYz"
var browserstack_projectID 	= "229974"
var browserstack_buildID

exports.browserstack_username = browserstack_username
exports.browserstack_password = browserstack_password

function getBrowserFor(person) {
	
	/**
	 * Get Browser instance for a given Person
	 * @param  {String}   person   Person/Actor for whom the Browser is required
 	*/
	
	return (person === 'Both' || person === 'I') ? browser : browser.select(person);

}

function printSessionURL() {
	
	if ( process.env.platform === 'browserstack' ) {
		
			browserstack_buildID = getBrowserstackBuild()
			
	}
	
	for (var actor in global.actorlist) { 
	    
		logging.silly("Actors: " + JSON.stringify(global.actorlist))
	    logging.silly("EmailIDs: " + global.actorlist[actor].emailID);
		
		if ( process.env.platform === 'browserstack' ) {
			
			cloudServiceAccountURL = "https://www.browserstack.com/automate/builds/" + browserstack_buildID + "/sessions/"
		
	
		} else if ( process.env.platform === 'saucelabs' ) {
	
			cloudServiceAccountURL = "https://saucelabs.com/tests/"
		
		} else return
		
		logging.info(actor + " Results at: " + cloudServiceAccountURL + getBrowserFor(actor).requestHandler.sessionID)
		
	}
	
}

function getBrowserstackBuild() {
	
	var builds, buildID
	
	var options = { 'username': browserstack_username, 'password': browserstack_password }
	
	var res = request('GET', 'https://www.browserstack.com/automate/projects/' + browserstack_projectID + '.json', {
	  
	  'headers': {
		  	'username': browserstack_username,
		  	'password': browserstack_password,
		  	'authorization': 'Basic a2FuYWtrYWxidXJnaTE6UFplV3pOUGdoaURuVnF2RjhlWXo='
	  }
	
	});
	
	var response = JSON.parse(res.getBody('utf8')).project
		
		env = 'Stage' // todo: read this off config
		buildID = jsonQuery('builds[name=' + env + '][hashed_id]', {
			data: response
		}).value
	
	return buildID
	
}