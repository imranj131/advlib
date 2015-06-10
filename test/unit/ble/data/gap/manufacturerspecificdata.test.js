/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var localname = require("../../../../../lib/ble/data/gap/manufacturerspecificdata.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA_APPLE = '';
var INPUT_DATA_IBEACON = '';
var INPUT_DATA_APPLE_AND_IBEACON = '';

// Expected outputs for the scenario
var EXPECTED_DATA_APPLE ='004c';
var EXPECTED_DATA_IBEACON ='0215';
var EXPECTED_DATA_APPLE_AND_IBEACON = {
																		uuid: '',
																		major: '',
																		minor: '',
																		txPower: ''
};

describe('ble data manufacturerspecificdata', function() {

  // Test the process function
  it('should convert ble advertiser data to a apple manufacturerspecificdata', function() {
  	process(INPUT_DATA_APPLE, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.manufacturerSpecificData.companyIdentifierCode, EXPECTED_DATA_APPLE);
  });
  it('should convert ble advertiser data to a iBeacon manufacturerspecificdata', function() {
  	process(INPUT_DATA_IBEACON, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.manufacturerSpecificData, EXPECTED_DATA_IBEACON);
  });
  it('should convert ble advertiser data to apple and iBeacon manufacturerspecificdata', function() {
  	process(INPUT_DATA_IBEACON, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.manufacturerSpecificData.iBeacon, EXPECTED_DATA_IBEACON);
  });
});

/**
Bluetooth Core Specification:
0xFF	«Manufacturer Specific Data»
*/