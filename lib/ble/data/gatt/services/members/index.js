/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var serviceData = require('../../../../gap/servicedata.js');
var eddystone = require('./google/eddystone.js');

// Look for uuid such as'feaa', etc and then go to ./google/eddystone.js to process 
// OR 
// if not go to table lookup and show companyName

 function process(payload) {

  var uuid = serviceData.uuid;
  var data = serviceData.data;
  var advertiserData.serviceData = {};

 switch(uuid) {
      case("feaa"):
        eddystone.process(payload, cursor, advertiserData);
        break;

        default:
 }

 return advertiserData.serviceData;

 }