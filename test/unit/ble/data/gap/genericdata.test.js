/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var localname = require("../../../../../lib/ble/data/gap/genericdata.js");
var assert = require ('assert'); 

// Constants for the scenario
var CURSOR = 0;
var ADVERTISER_DATA = {};
var ADTYPE = ;

// Inputs for the scenario
var INPUT_DATA = '';

// Expected outputs for the scenario
var EXPECTED_DATA ='';


describe('ble data genericdata', function() {

  // Test the process function
  it('should parse generic data', function() {
  	process(INPUT_DATA_APPLE, CURSOR, ADVERTISER_DATA, ADTYPE);
    assert.deepEqual(ADVERTISER_DATA[ADTYPE], EXPECTED_DATA);
  });
  
});
