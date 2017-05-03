/**
 * Focus the last opened window
 * @param  {String}   type Type of object to close (window or tab)
 * @param  {Function} done Function to execute when finished
 */

var winston = require('winston')

module.exports = (type, done) => {
	
	var logging = require('winston-annotate')(winston, "(focusLastOpenedWindow)");
	
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = browser.windowHandles().value.slice(-1)[0];

	logging.info("(try) Switching Browser")
    browser.window(lastWindowHandle);
	logging.info("(ok!) Switching Browser")

    done();
};
