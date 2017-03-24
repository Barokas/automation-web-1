/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 * @param  {Function} done Function to execute when finished
 */

import {getBrowserFor} from './utils'

module.exports = (person, ms, done) => {
    /**
     * Number of milliseconds
     * @type {Int}
     */
    const intMs = parseInt(ms, 10);

    getBrowserFor(person).pause(intMs);

    done();
};
