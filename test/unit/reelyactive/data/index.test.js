/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var advlib = require("../../../../lib/reelyactive/data/index.js");
var assert = require('assert'); 

// Inputs for the scenario
var INPUT_DATA = '123456742029' ;

// Expected outputs for the scenario
var EXPECTED_DATA =  {
  battery: '3.33V',
  temperature: '-4.0C'
 
}

describe('reelyactive data', function() {

  // Test the process function
  it('should convert a hexadecimal advertiser data to JSON', function() {
    assert.deepEqual(advlib.process(INPUT_DATA), EXPECTED_DATA);
  });
});