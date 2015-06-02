/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var assert = require ('assert'); 

var advlib = require ('../lib/ble/index.js');

var payload = '421655daba50e1fe0201050c097265656c794163746976650100' ;

console.log(advlib.process(payload)); 

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

 assert.deepEqual(advlib.process(payload), expectedresult);

