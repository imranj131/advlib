/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 /*
Bluetooth Core Specification:
0x02	«Incomplete List of 16-bit Service Class UUIDs»	
0x03	«Complete List of 16-bit Service Class UUIDs»		
0x06	«Incomplete List of 128-bit Service Class UUIDs»
0x07	«Complete List of 128-bit Service Class UUIDs»
 */

var uuid = require("../../../../../lib/ble/data/gap/uuid.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA_NC_16 = '';
var INPUT_DATA_C_16 = '';
var INPUT_DATA_NC_128 = '';
var INPUT_DATA_C_128 = '32xx4449555520657669746341796c656572';

// Expected outputs for the scenario
var EXPECTED_DATA_NC_16 ='';
var EXPECTED_DATA_C_16 ='';
var EXPECTED_DATA_NC_128 ='';
var EXPECTED_DATA_C_128 = '7265656c794163746976652055554944'; 

describe('ble data uuid', function() {

  // Test the process function
  it('should parse BLE advertiser non-complete 16-bit UUIDs', function() {
  	uuid.nonComplete16BitUUIDs(INPUT_DATA_NC_16, CURSOR, ADVERTISER_DATA);
    assert.equal(ADVERTISER_DATA.nonComplete16BitUUIDs, EXPECTED_DATA_NC_16);
   
  });
  it('should parse BLE advertiser complete 16-bit UUIDs', function() {
  	uuid.complete16BitUUIDs(INPUT_DATA_C_16, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.complete16BitUUIDs, EXPECTED_DATA_C_16);
  });
  it('should parse BLE advertiser non-complete 128-bit UUIDs.', function() {
  	uuid.nonComplete128BitUUIDs(INPUT_DATA_NC_128, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.nonComplete128BitUUIDs, EXPECTED_DATA_NC_128);
  });
  it('should parse BLE advertiser complete 128-bit UUIDs', function() {
  	uuid.complete128BitUUIDs(INPUT_DATA_C_128, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.complete128BitUUIDs, EXPECTED_DATA_C_128);
  });

});