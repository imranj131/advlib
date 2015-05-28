/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 /**
 * Calculate the length of the data (flag excluded) of a BLE tag.
 * @param {string} payload The raw payload as a hexadecimal-string.
 * @param {number} cursor The start index within the payload.
 */
function process(payload, cursor) {
  return (parseInt(payload.substr(cursor,2),16) - 1) * 2;
}

module.exports.process = process;