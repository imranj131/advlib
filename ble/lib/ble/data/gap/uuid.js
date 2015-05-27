/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 
/**
 * Parse BLE advertiser non-complete 16-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var nonComplete16BitUUIDs = reverseBytes(data);
  advertiserData.nonComplete16BitUUIDs = nonComplete16BitUUIDs;
}


/**
 * Parse BLE advertiser complete 16-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var complete16BitUUIDs = reverseBytes(data);
  advertiserData.complete16BitUUIDs = complete16BitUUIDs;
}


/**
 * Parse BLE advertiser non-complete 128-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var nonComplete128BitUUIDs = reverseBytes(data); 
  advertiserData.nonComplete128BitUUIDs = nonComplete128BitUUIDs;
}


/**
 * Parse BLE advertiser complete 128-bit UUIDs.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 * @param {Object} advertiserData The object containing all parsed data.
 */
function process(payload, cursor, advertiserData) {
  var data = payload.substr(cursor+4, getTagDataLength(payload, cursor));
  var complete128BitUUIDs = reverseBytes(data);
  advertiserData.complete128BitUUIDs = complete128BitUUIDs;
}


module.exports.process = process;