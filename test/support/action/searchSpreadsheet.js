/**
 * Search a Google Sheet
 */

var winston 			= require('winston')
var chance      		= require('chance').Chance()
var async 				= require('async')
var GoogleSpreadsheet 	= require('google-spreadsheet')

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1e32BGdcz3xQTeSCPMTGLQZP_RJQT3LmYl0QYBleE_sU')

var SHEET_NUMBER			= 0
// first column A is '0'
var COL_ROW_NUMBER			= 0
var COL_REQUESTER_EMAIL		= 1
var COL_AIRTASKER_USER_ID	= 2
var COL_ZENDESK_TICKET_ID	= 3
var COL_STATUS				= 4

var sheet
var operations = []


import {getBrowserFor} from './utils'


module.exports = (person, startingRow, endingRow, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(searchSpreadsheet)");
	
	global.startingRow 	= startingRow
	global.endingRow 	= endingRow
	
	logging.info("Start Search Row # " + startingRow)
	logging.info("  End Search Row # " + endingRow)
	
	operations.push(setAuth)
	operations.push(getInfoAndWorksheets)
	operations.push(pickEligibleRow)
	
	async.series(operations, function (err, results) {
		// console.log("I have the result: " + results)
	

	});
	   
	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	if (done) {

		done();
	}
};


function setAuth(step) {
  // see notes below for authentication instructions!
  var creds = require('../../../google-spreadsheet/automation-468e27435a5e.json');

  doc.useServiceAccountAuth(creds, step);
  // console.log('Google Auth Successful')
  
  
}

function getInfoAndWorksheets(step) {
  
  doc.getInfo(function(err, info) {
	  
	  var logging = require('winston-annotate')(winston, "[" + "Admin" + "] " + "(searchSpreadsheet)")
	  
	  sheet = info.worksheets[SHEET_NUMBER];
	  
	  logging.info('Loaded Doc: '+ info.title +' by '+ info.author.email)
	  
	  logging.info('Sheet: '+ sheet.title);
	  
	  step();
  
  });

}

function pickEligibleRow(step) {

	var logging = require('winston-annotate')(winston, "[" + "Admin" + "] " + "(searchSpreadsheet)");
	
  for (var i=global.startingRow; i<=global.endingRow; i++) {
  	
	// console.log('iteration # ' + i)
	
	// if file exists, then return
	  
	  if (global.railsSheetAirtaskerUserID != undefined) {
	      // return if we already got a userID
	  	return
	  }
	  	
      sheet.getCells({
        'min-row': i,
        'max-row': i,
        'return-empty': true // fetches entire sheet if true
      }, function(err, cells) {

        // var cell = cells[COL_REQUESTER_EMAIL];
  	  // console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        // var cell = cells[COL_AIRTASKER_USER_ID];
  	  // console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        // var cell = cells[COL_ZENDESK_TICKET_ID];
  	  // console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        // var cell = cells[COL_STATUS];
	  	  // console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

	  if ( cells[COL_STATUS].value == '' ) {
		  
		cells[COL_STATUS].value = 'PROCESSING';
		
		// logging.info("Choosing Row: " + cells[COL_ROW_NUMBER].value)
		
		global.railsSheetRow 				= cells[COL_ROW_NUMBER].value
		global.railsSheetEmail 				= cells[COL_REQUESTER_EMAIL].value
		global.railsSheetAirtaskerUserID 	= cells[COL_AIRTASKER_USER_ID].value
		global.railsSheetZendeskID 			= cells[COL_ZENDESK_TICKET_ID].value
		
	  }
	  
      });
	  
  }
 
  step();

}

