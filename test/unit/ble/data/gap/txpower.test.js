/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var txpower = require("../../../../../lib/ble/data/gap/txpower.js").process;
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA = 'ba50e1fe0201050c097265656c794163746976650100';

// Expected outputs for the scenario
var EXPECTED_DATA = '-31dBm';

describe('ble data txpower', function() {

  // Test the process function
  it('should parse BLE advertiser TX power', function() {
  	txpower(INPUT_DATA, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.txPower, EXPECTED_DATA);
  });
  
});
