var frameworkSettings = require('./test/support/settings/framework.js')

var stepTimeout = process.env.debug ? (24 * 60 * 60 * 1000) : frameworkSettings.stepTimeout

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
        // './features/cucumber/*.feature'
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

        // 'wdio-screenshot': {}
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
    reporters: ['spec'],
    reporterOptions: {
    allure: {
    	outputDir: 'allure-results'
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

        var Eyes;
        var eyes;

        var opt = browser.options;
		
		var serverUrl = opt.protocol + '://' + opt.hostname + ':' + opt.port + '/wd/hub'; 
		
		if ( process.env.platform === 'browserstack' ) { serverUrl='https://' + 'kanakkalburgi1' + ':' +
		'PZeWzNPghiDnVqvF8eYz' + '@hub-cloud.browserstack.com/wd/hub' }
		
        var ALL_SESSIONS	  		= JSON.stringify(browser.session())
        var POSTER_SESSION_ID 		= JSON.stringify(browser.session().Poster.sessionId)
        var WORKER_SESSION_ID 		= JSON.stringify(browser.session().Worker.sessionId)

		var EYES_VIEWPORT	  		= process.env.eyesViewport || '1280x1100';
		var EYES_VIEWPORT_WIDTH 	= parseInt(EYES_VIEWPORT.split('x')[0]);
		var EYES_VIEWPORT_HEIGHT 	= parseInt(EYES_VIEWPORT.split('x')[1]);
		
        console.log( POSTER_SESSION_ID + " ****** POSTER_SESSION_ID ****** ")
        console.log( WORKER_SESSION_ID + " ****** WORKER_SESSION_ID ****** ")
        console.log( ALL_SESSIONS + " ****** ALL_SESSIONS ****** ")


        console.log( EYES_VIEWPORT_WIDTH + " ****** EYES_VIEWPORT_WIDTH ****** ")
        console.log( EYES_VIEWPORT_HEIGHT + " ****** EYES_VIEWPORT_HEIGHT ****** ")
		
        ////////////////// create_webdriver /////////////
        Poster_driver = create_webdriver(serverUrl, browser.session().Poster.sessionId);
        Worker_driver = create_webdriver(serverUrl, browser.session().Worker.sessionId);

        ////////////////// Declare Browsers /////////////
        var Poster_browser = browser.select('Poster');
        var Worker_browser = browser.select('Worker');

        ////////////////// Create Eyes Instances /////////////

        Poster_eyes = InitializeEyes();
		Worker_eyes = InitializeEyes();

        Poster_browser.addCommand("EyesOpen", function async (testName, appName) {
			
			if (appName == null) {
				appName = "Poster"  // This will be the Default appName;
			}
			
            console.log("** Opening Poster eyes **");
            global.posterEyesOpen = true
            return OpenEyes(Poster_eyes, Poster_driver, testName, appName, EYES_VIEWPORT_WIDTH, EYES_VIEWPORT_HEIGHT);

        });

        Poster_browser.addCommand("EyesCheckWindow", function async(tag) {
            console.log("** Poster Visually Checking Page: " + tag + " **");
            return Poster_eyes.checkWindow(tag);
        });

        Poster_browser.addCommand("EyesClose", function async(throwEx) {
            console.log("** Poster Closing eyes **")
            return CloseEyes(Poster_eyes);
        });

        Worker_browser.addCommand("EyesOpen", function async (testName, appName) {

            if (appName == null) {
				appName="Worker"  // This will be the Default appName;
			}

            console.log("** Opening Worker eyes **");
            global.workerEyesOpen = true 
            return OpenEyes(Worker_eyes, Worker_driver, testName, appName, EYES_VIEWPORT_WIDTH, EYES_VIEWPORT_HEIGHT);
        
		});

        Worker_browser.addCommand("EyesCheckWindow", function async(tag) {
            console.log("** Worker Visually Checking Page: " + tag + " **");
            return Worker_eyes.checkWindow(tag);
        });

        Worker_browser.addCommand("EyesClose", function async(throwEx) {
            console.log("** Worker Closing eyes **")
            return CloseEyes(Worker_eyes,throwEx);
        });





    },

            //    beforeFeature: function (scenario) {
            //
            //    // return browser.EyesOpen("Landing Pages");
            //
            // },

    afterScenario: function (feature) {

        // if ( global.posterEyesOpen ) {
        //     Poster_browser.EyesClose(true)
        //     global.posterEyesOpen = false
        // }

        // if ( global.workerEyesOpen ) {
        //     Worker_browser.EyesClose(true)
        //     global.workerEyesOpen = false
        // }
			
            

			// return
    },

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
        // afterCommand: function (commandName, args, result, error) {
        // },
        //
        // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
        // afterTest: function (test) {
        // },
        //
        // Hook that gets executed after the suite has ended
        // afterSuite: function (suite) {
        // },
        //
        // Gets executed after all tests are done. You still have access to all global variables from
        // the test.
        after: function (result, capabilities, specs) {

        // if ( global.posterEyesOpen ) {
        //     Poster_browser.EyesClose(true)
        //     global.posterEyesOpen = false
        // }

        // if ( global.workerEyesOpen ) {
        //     Worker_browser.EyesClose(true)
        //     global.workerEyesOpen = false
        // }


        },
        //
        // Gets executed after all workers got shut down and the process is about to exit. It is not
        // possible to defer the end of the process using a promise.
        // onComplete: function(exitCode) {
        // }
};


function create_webdriver(server_url, session_id) {
	
    console.log("* Creating Webdriver * ");
	console.log("Server URL: " + server_url);
    console.log("Session ID: " + session_id);

    var webdriver = require('selenium-webdriver');
    var http = require('selenium-webdriver/http');

    var commandExecutor = new http.Executor(new http.HttpClient(server_url));
    return webdriver.WebDriver.attachToSession(commandExecutor, session_id);
}

function InitializeEyes() {
    console.log("InitializeEyes");
    Eyes = require('eyes.selenium').Eyes;
    eyes = new Eyes();
    eyes.setApiKey("ZH3tjrLWS1061i3fqivfsRXESn2ltoL6Uk1jTlb9gHCGQ110");
    eyes.setForceFullPageScreenshot(true);

    // http://support.applitools.com/customer/portal/articles/2088359-match-levels
    eyes.setMatchLevel('Content');

    eyes.setStitchMode(Eyes.StitchMode.CSS);
    var ConsoleLogHandler = require('eyes.selenium').ConsoleLogHandler;
    eyes.setLogHandler(new ConsoleLogHandler(true));
    return eyes;

}

function OpenEyes(eyes,driver, testName, appName, width, height) {
    return eyes.open(driver, appName, testName, {width: width, height: height});
}

function CloseEyes(eyes,throwEx){
    return eyes.close(false).then(function (res) {
        console.log();
        console.log("***************************************************************************************************************");
        console.log();
        console.log("## Test Result ##");
        console.log(res);
        console.log();
        console.log("## Applitools Results URL ##");
        console.log(res.appUrls.session);
        console.log();
        console.log("***************************************************************************************************************");

        if (!res.isPassed) {
            
            assert.fail(1, 2, "Visual Check Failure - See " + res.appUrls.session, '###');
        
        }  

    });

}