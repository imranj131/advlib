/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var flags = require("../../../../../lib/ble/data/gap/flags.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA_NC_16 = '';
var INPUT_DATA_C_16 = '';
var INPUT_DATA_NC_128 = '';
var INPUT_DATA_C_128 = '';

// Expected outputs for the scenario
var EXPECTED_DATA_NC_16 = '';
var EXPECTED_DATA_C_16 = '';
var EXPECTED_DATA_NC_128 = '';
var EXPECTED_DATA_C_128 = '';


describe('ble data uuid', function() {

  // Test the process function
  it('should parse BLE advertiser non-complete 16-bit UUIDs', function() {
  	nonComplete16BitUUIDs(INPUT_DATA_NC_16, CURSOR, ADVERTISER_DATA);
    assert.equal(ADVERTISER_DATA.nonComplete16BitUUIDs, EXPECTED_DATA_NC_16);
   
  });
  it('should parse BLE advertiser complete 16-bit UUIDs', function() {
  	complete16BitUUIDs(INPUT_DATA_C_16, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.complete16BitUUIDs, EXPECTED_DATA_C_16);
  });
  it('should parse BLE advertiser non-complete 128-bit UUIDs.', function() {
  	nonComplete128BitUUIDs(INPUT_DATA_NC_128, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.nonComplete128BitUUIDs, EXPECTED_DATA_NC_128);
  });
  it('should parse BLE advertiser complete 128-bit UUIDs', function() {
  	complete128BitUUIDs(INPUT_DATA_C_128, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.complete128BitUUIDs, EXPECTED_DATA_C_128);
  });

});