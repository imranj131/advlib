/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 /**
 * Parse BLE advertiser data service solicitation 16-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var solicitation16BitUUIDs = reverseBytes(data);
  advertiserData.solicitation16BitUUIDs = solicitation16BitUUIDs;
}


/**
 * Parse BLE advertiser data service solicitation 128-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var solicitation128BitUUIDs = reverseBytes(data);
  advertiserData.solicitation128BitUUIDs = solicitation128BitUUIDs;
}

module.exports.process = process;