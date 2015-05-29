/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var advlib = require ('../../lib/ble/index.js');

var payload = '421655daba50e1fe0201050c097265656c794163746976650100' ;

console.log(advlib.process(payload)); 

//421655daba50e1fe0201050c097265656c794163746976650100 : THE LONG HEXADECIMAL FRO JEFF
//1229ee4305646675b487 : THE SHORT HEXADECIMAL FROM THE INTERNET