/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 /**
 * Convert raw txPower to dBm.
 * @param {string} rawTxPower The raw txPower as a hexadecimal-string.
 */
function convertTxPower(rawTxPower) {
  var txPower = parseInt(rawTxPower,16);
  if(txPower > 127) {
    txPower -= 256;
  }
  return txPower + "dBm";
}

module.exports.process = process;