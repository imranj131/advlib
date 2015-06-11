/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var servicedata = require("../../../../../lib/ble/data/gap/servicedata.js").process;
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};

// Inputs for the scenario
var INPUT_DATA = '421655daba50e1fe0201050c097265656c794163746976650100';

// Expected outputs for the scenario
var EXPECTED_DATA ={
	uuid:"da55",
	data:"ba50e1fe0201050c097265656c794163746976650100",
};


describe('ble data servicedata', function() {

  // Test the process function
  it('should parse BLE advertiser data service data', function() {
  	servicedata(INPUT_DATA, CURSOR, ADVERTISER_DATA);
    assert.deepEqual(ADVERTISER_DATA.serviceData, EXPECTED_DATA);
  });
  
});
