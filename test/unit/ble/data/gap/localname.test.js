/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var localname = require("../../../../../lib/ble/data/gap/localname.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA = '020109';

// Expected outputs for the scenario
var EXPECTED_DATA_SHORTENED_LOCAL_NAME ='\u0001';
var EXPECTED_DATA_COMPLETE_LOCAL_NAME ='reelyActive';

describe('ble data localname', function() {

  // Test the process function
  it('should convert ble advertiser data to a shortened local name', function() {
  	localname.shortenedLocalName(INPUT_DATA, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.shortenedLocalName[0], EXPECTED_DATA_SHORTENED_LOCAL_NAME);
   
  });
  it('should convert ble advertiser data to a complete local name', function() {
  	localname.completeLocalName(INPUT_DATA, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.completeLocalName, EXPECTED_DATA_COMPLETE_LOCAL_NAME);
  });

});

/**
Bluetooth Core Specification:
0x08	«Shortened Local Name»	
0x09	«Complete Local Name»
*/