/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var localname = require("../../../../../lib/ble/data/gap/servicedata.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA = '';

// Expected outputs for the scenario
var EXPECTED_DATA ={
	uuid:'';,
	data:'';
};


describe('ble data servicedata', function() {

  // Test the process function
  it('should parse BLE advertiser data service data', function() {
  	process(INPUT_DATA_APPLE, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.serviceData, EXPECTED_DATA);
  });
  
});
