/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */

 /**
 * Reverse the order of the bytes in the data.
 * @param {string} data The data as a hexadecimal-string.
 */
function process(data) {
  var result = "";
  for(var cChar = (data.length - 2); cChar >= 0; cChar -= 2) {
    result += data.substr(cChar,2);
  }
  return result;
}

module.exports.process = process;