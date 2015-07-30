/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 var pdu = require('../../common/util/pdu.js');


 /**
 * Parse BLE advertiser data for Eddystone data.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var companyIdentifierCode = payload.substr(cursor+6, 2);

  companyIdentifierCode += payload.substr(cursor+4, 2);

  var data = payload.substr(cursor+8, pdu.getTagDataLength(payload, cursor)-4);

  advertiserData.manufacturerSpecificData = {
                                 companyIdentifierCode: companyIdentifierCode,
                                 data: data };

  var isEddystone = (companyIdentifierCode == "FEAA");

  
  if(isEddystone) {
    var eddystone = {};

    eddystone.dataType = data.substr(4,32);
    eddystone.uuid = data.substr(36,4);
    eddystone.frameType = data.substr(40,4);

    if(eddystone.frameType = "0000") {

      eddystone.uid = {};

      eddystone.uid.frameTypeUID = ''; // Value = 0x00
      eddystone.uid.rangingData = '' // Calibrated Tx power at 0 m
      eddystone.uid.namespace = ''; // 10-byte ID Namespace
      eddystone.uid.instance = ''; // 6-byte ID Instance
	}

	if(eddystone.frameType = "0010") {

	  eddystone.uri = {};

	  eddystone.uri.frameTypeURI = ''; // Value = 0x10
	  eddystone.uri.txPower = ''; // Calibrated Tx power at 0 m
	  eddystone.uri.urlScheme = ''; // Encoded Scheme Prefix
	  eddystone.uri.encodedUrl = ''; // Length 0-17
	}

	if(eddystone.frameType = "0020") {  
	  eddystone.tlm = {};

	  eddystone.tlm.frameTypeTLM = ''; // Value = 0x20
	  eddystone.tlm.tlmVersion = ''; // TLM version, value = 0x00
	  eddystone.tlm.vBatt = ''; // Battery voltage, 1 mV/bit
	  eddystone.tlm.temp = ''; // Beacon temperature
	  eddystone.tlm.advCnt = ''; // Advertising PDU count
	  eddystone.tlm.secCnt = '' // Time since power-on or reboot
	}

    advertiserData.manufacturerSpecificData.eddystone = eddystone; 
  }
}

module.exports.process = process;
