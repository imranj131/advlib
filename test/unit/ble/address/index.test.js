/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var advlib = require("../../../../lib/ble/address/index.js");
var assert = require ('assert'); 

// Inputs for the scenario
var INPUT_DATA = '55daba50e1fe' ;

// Expected outputs for the scenario
var EXPECTED_DATA =  {
  type: 'ADVA-48',
  value: 'fee150bada55'
}

describe('ble address', function() {

  // Test the process function
  it('should convert a hexadecimal address to JSON ', function() {
    assert.deepEqual(advlib.process(INPUT_DATA), EXPECTED_DATA);
  });

});