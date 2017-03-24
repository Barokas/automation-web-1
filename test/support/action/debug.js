/**
 * Debug execution 
 */

import {getBrowserFor} from './utils'

module.exports = (person, ms, done) => {
   
    getBrowserFor(person).debug()

};
