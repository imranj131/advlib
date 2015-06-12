/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

/**
Bluetooth Core Specification:
0x08	«Shortened Local Name»	
0x09	«Complete Local Name»
*/

var localname = require("../../../../../lib/ble/data/gap/localname.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA_SHORTENED_LOCAL_NAME = '23084c000215b9407f30f5f8466eaff925556b57fe6d294c903974';
var INPUT_DATA_COMPLETE_LOCAL_NAME = '23094c000215b9407f30f5f8466eaff925556b57fe6d294c903974'

// Expected outputs for the scenario
var EXPECTED_DATA_SHORTENED_LOCAL_NAME ='';
var EXPECTED_DATA_COMPLETE_LOCAL_NAME ='L¹@0õøFn¯ù%UkWþm)L9t';

describe('ble data localname', function() {

  // Test the process function
  it('should convert ble advertiser data to a shortened local name', function() {
  	localname.shortenedLocalName(INPUT_DATA_SHORTENED_LOCAL_NAME, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.shortenedLocalName, EXPECTED_DATA_SHORTENED_LOCAL_NAME);
   
  });
  it('should convert ble advertiser data to a complete local name', function() {
  	localname.completeLocalName(INPUT_DATA_COMPLETE_LOCAL_NAME, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.completeLocalName, EXPECTED_DATA_COMPLETE_LOCAL_NAME);
  });

});

