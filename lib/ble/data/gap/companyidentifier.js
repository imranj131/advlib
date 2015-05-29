/**
 * Copyright reelyActive 2015
 * We believe in an open Internet of Things
 */


var servicedata = require('./servicedata.js');
var manufacturerspecificdata = require('./manufacturerspecificdata.js');


 var companyIdentifierCode = manufacturerspecificdata.process.companyIdentifierCode;
      switch(companyIdentifierCode) {
        case "004c": // Apple inc.
          device.url = "http://reelyactive.com/metadata/apple.json";
          return;
        case "008c": // Gimbal inc.
          device.url = "http://reelyactive.com/metadata/gimbal.json";
          return;
      }


var serviceData = servicedata.process;
    if(serviceData) {
      switch(serviceData.uuid) {
        case "fee6":  // Seed
          device.url = "http://reelyactive.com/metadata/seedlabs.json";
          return;
      }
    }