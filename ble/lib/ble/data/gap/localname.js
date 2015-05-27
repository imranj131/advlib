/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

var tagdatalength = require('./tagdatalength.js');

 /**
 * Parse BLE advertiser data non-complete shortened local name.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var hexName = payload.substr(cursor+4, tagdatalength.process(payload, cursor));
  var result = "";
  for(var cChar = 0; cChar < hexName.length; cChar += 2)
    result += String.fromCharCode(parseInt(hexName.substr(cChar,2),16));
  advertiserData.shortenedLocalName = result;
}


/**
 * Parse BLE advertiser data complete local name.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function parseCompleteLocalName(payload, cursor, advertiserData) {
  var hexName = payload.substr(cursor+4, tagdatalength.process(payload, cursor));
  var result = "";
  for(var cChar = 0; cChar < hexName.length; cChar += 2)
    result += String.fromCharCode(parseInt(hexName.substr(cChar,2),16));
  advertiserData.completeLocalName = result;
}


module.exports.process = process;