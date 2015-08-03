/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 var serviceData = require('../../../../gap/servicedata.js');

 /**
 * Parse BLE advertiser data for Eddystone data.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {

  var uuid = serviceData.uuid;
  var data = serviceData.data;

   // TO DO: Check substr
  var dataType = data.substr(4,32);
  var uuid = data.substr(36,4);
  var frameType = data.substr(40,4);

  advertiserData.serviceData.eddystone = {
                          dataType: dataType,
                          uuid: uuid, 
                          frameType: frameType };

    if(frameType = "0000") {

      advertiserData.serviceData.eddystone.uid = {};

      advertiserData.serviceData.eddystone.uid.frameTypeUID = ''; // Value = 0x00
      advertiserData.serviceData.eddystone.uid.rangingData = '' // Calibrated Tx power at 0 m
      advertiserData.serviceData.eddystone.uid.namespace = ''; // 10-byte ID Namespace
      advertiserData.serviceData.eddystone.uid.instance = ''; // 6-byte ID Instance
	  }

	  if(frameType = "0010") {

	  advertiserData.serviceData.eddystone.uri = {};

	  advertiserData.serviceData.eddystone.uri.frameTypeURI = ''; // Value = 0x10
	  advertiserData.serviceData.eddystone.uri.txPower = ''; // Calibrated Tx power at 0 m
	  advertiserData.serviceData.eddystone.uri.urlScheme = ''; // Encoded Scheme Prefix
	  advertiserData.serviceData.eddystone.uri.encodedUrl = ''; // Length 0-17
	  }

	  if(frameType = "0020") {  
	  advertiserData.serviceData.eddystone.tlm = {};

	  advertiserData.serviceData.eddystone.tlm.frameTypeTLM = ''; // Value = 0x20
	  advertiserData.serviceData.eddystone.tlm.tlmVersion = ''; // TLM version, value = 0x00
	  advertiserData.serviceData.eddystone.tlm.vBatt = ''; // Battery voltage, 1 mV/bit
	  advertiserData.serviceData.eddystone.tlm.temp = ''; // Beacon temperature
	  advertiserData.serviceData.eddystone.tlm.advCnt = ''; // Advertising PDU count
	  advertiserData.serviceData.eddystone.tlm.secCnt = '' // Time since power-on or reboot
	  } 
  }

module.exports.process = process;
