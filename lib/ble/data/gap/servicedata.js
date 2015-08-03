/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var pdu = require('../../common/util/pdu.js');
var memberservices = require('../../common/assignednumbers/memberservices.js');

 /**
 * Parse BLE advertiser data service data.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var serviceData = payload.substr(cursor+4, pdu.getTagDataLength(payload, cursor));
  var uuid = serviceData.substr(2,2) + serviceData.substr(0,2);
  var data = serviceData.substr(4);
  advertiserData.serviceData = { uuid: uuid, data: data };

  // TO DO: Make a list of all the cases and refer to ./gatt/services
  switch(uuid) {

    // case("feaa"):
      
    //    break;

    default:
      if(memberservices.companyNames.hasOwnProperty(uuid)) {
  	    advertiserData.serviceData.companyName = 
  	    								     memberservices.companyNames[uuid];
      }
  } 
}

module.exports.process = process;