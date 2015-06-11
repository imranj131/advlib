/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

/**
Bluetooth Core Specification:
0x14	«List of 16-bit Service Solicitation UUIDs»	
0x15	«List of 128-bit Service Solicitation UUIDs»
*/

var solicitation = require("../../../../../lib/ble/data/gap/solicitation.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};
  
// Inputs for the scenario
var INPUT_DATA_16_BIT_UUID = '03144c00';
var INPUT_DATA__128_BIT_UUID = '23154c000215b9407f30f5f8466eaff925556b57fe6d294c903974';

// Expected outputs for the scenario
var EXPECTED_DATA_16_BIT_UUID ='004c';
var EXPECTED_DATA_128_BIT_UUID = '7439904c296dfe576b5525f9af6e46f8f5307f40b91502004c';

describe('ble data solicitation', function() {

  // Test the process function
  it('should parse BLE advertiser data service solicitation 16-bit UUIDs', function() {
  	solicitation.solicitation16BitUUIDs(INPUT_DATA_16_BIT_UUID, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.solicitation16BitUUIDs, EXPECTED_DATA_16_BIT_UUID);
  });
  it('should parse BLE advertiser data service solicitation 128-bit UUIDs', function() {
  	solicitation.solicitation128BitUUIDs(INPUT_DATA__128_BIT_UUID, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.solicitation128BitUUIDs, EXPECTED_DATA_128_BIT_UUID);
  });
});
