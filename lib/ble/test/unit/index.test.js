/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var advlib = require("../../index.js");
var assert = require ('assert'); 

var payload = '421655daba50e1fe0201050c097265656c794163746976650100' ;
var expectedresult =  {

              type: 'ADVA-48',
                value: 'fee150bada55',
                advHeader: 
                 { type: 'ADV_NONCONNECT_IND',
                   length: 22,
                   txAdd: 'random',
                   rxAdd: 'public' },
                advData: 
                 { flags: [ 'LE Limited Discoverable Mode', 'BR/EDR Not Supported' ],
                   completeLocalName: 'reelyActive' } 

               }

describe("Wireless Packet Decoder", function() {
  describe("Payload to Packet Info Decoder", function() {
    it("converts the a hexadecimal payload to a JSON packet", function() {
        assert.deepEqual(advlib.process(payload), expectedresult);
      
    });
  });

});