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


var async = require('async'),
    operations = [];


import {getBrowserFor} from './utils'


module.exports = (person, markingText, done) => {
	
	var logging = require('winston-annotate')(winston, "[" + person + "] " + "(markStatusInSheet)");
		

	// logging.info("Accessing the file: " + global.sheetDetailsFile)
	
	async.series([
	
	  function setAuth(step) {
		  var creds = require('../../../google-spreadsheet/automation-468e27435a5e.json');

		  doc.useServiceAccountAuth(creds, step);
		  // console.log('Google Auth Successful')
	  },
  
	  function getInfoAndWorksheets(step) {
		  doc.getInfo(function(err, info) {
		    // console.log('Loaded Doc: '+info.title+' by '+info.author.email);
		    sheet = info.worksheets[SHEET_NUMBER];
		    // console.log('Sheet 1: '+sheet.title); // '+sheet.rowCount+'x'+sheet.colCount);
		    step();
		  });
	  },
  
	  function markInProcess(step) {
	  
	  	var logging = require('winston-annotate')(winston, "[" + "Admin" + "] " + "(markStatusInSheet)");
	
	  	logging.info("Global value: " + global.railsSheetRow)
	  	logging.info("Global value: " + global.railsSheetEmail)
	  	logging.info("Global value: " + global.railsSheetAirtaskerUserID)
	  	logging.info("Global value: " + global.railsSheetZendeskID)
		
	  	
		      sheet.getCells({
		        'min-row': global.railsSheetRow,
		        'max-row': global.railsSheetRow,
		        'return-empty': true // fetches entire sheet if true
		      }, function(err, cells, cb) {


	  			// console.log(cells[0].value + ' chosen for deletion')
				  var cell = cells[COL_STATUS]
	  				cell.value = markingText;
					cell.save(done); //async
				
	        
		      });
	  
		  step();

	  }
  
 
	]);
	
	
	/*
		note: returning callback in some cases is leading to bad behaviour (like ignoring assert fails)
		hence providing a switch here to turn off callback by invoking this module with false instead of done
	*/

	// if (done) {
	//
	// 	done();
	// }
};


function setAuth(step) {
  // see notes below for authentication instructions!
  var creds = require('../../../google-spreadsheet/automation-468e27435a5e.json');

  doc.useServiceAccountAuth(creds, step);
  console.log('Google Auth Successful')
}

function getInfoAndWorksheets(step) {
  doc.getInfo(function(err, info) {
    console.log('Loaded Doc: '+info.title+' by '+info.author.email);
    sheet = info.worksheets[0];
    console.log('Sheet 1: '+sheet.title); // '+sheet.rowCount+'x'+sheet.colCount);
    step();
  });
}

function markRowAsProcessing(step) {

	var logging = require('winston-annotate')(winston, "[" + "Admin" + "] " + "(readUser: markRowAsProcessing)");
	
	logging.info("Global value: " + global.railsSheetRow)
	logging.info("Global value: " + global.railsSheetEmail)
	logging.info("Global value: " + global.railsSheetAirtaskerUserID)
	logging.info("Global value: " + global.railsSheetZendeskID)
	
      sheet.getCells({
        'min-row': global.railsSheetRow,
        'max-row': global.railsSheetRow,
        'return-empty': true // fetches entire sheet if true
      }, function(err, cells) {

        var cell = cells[0];
  	  logging.info('IN PROCESS MARKED Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        var cell = cells[1];
  	  logging.info('IN PROCESS MARKED Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        var cell = cells[2];
  	  logging.info('IN PROCESS MARKED Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

        var cell = cells[3];
	  	  logging.info('IN PROCESS MARKED Cell R'+cell.row+'C'+cell.col+' = '+cell.value);

		var cell = cells[4];

	  // if ( cell.value == '' ) {
		  
		
		cell.value = 'PROCESSING';
		cell.save(); //async
		step();

	  // }
	  


        
      });
	  

 
  

}

