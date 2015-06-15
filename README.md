advlib
======

Library for wireless advertising packet decoding.  Currently supports the following protocols:
* [Bluetooth Smart (BLE)](#bluetooth-smart-ble-advertising-packet-library)
* [reelyActive RFID](#reelyactive-rfid-library)


Installation
------------

  ```javascript
    npm install advlib
  ```

Hello advlib
------------

```javascript
var advlib = require('advlib');

var rawHexPacket = '421655daba50e1fe0201050c097265656c79416374697665';
var processedPacket = advlib.ble.process(rawHexPacket);

console.log(JSON.stringify(processedPacket, null, " "));
```

The console output should appear as follows:

  ```javascript
    {
      type: "ADVA-48",
      value: "fee150bada55",
      advHeader: { 
        type: "ADV_NONCONNECT_IND",
        length: 22,
        txAdd: "random",
        rxAdd: "public" 
      },
      advData: {
        flags: [ "LE Limited Discoverable Mode", "BR/EDR Not Supported" ],
        completeLocalName: "reelyActive" 
      } 
    }
  ```

Bluetooth Smart (BLE) Advertising Packet Library
------------------------------------------------

Process a raw packet (as a hexadecimal string) with the following command:

    advlib.ble.process(rawHexPacket);

The library is organized hierarchically so that the separate elements of a packet can be processed individually.  Refer to the index below for details on each element:

* [Header](#header)
* [Address](#address)
* [Data](#data)
  * [Generic Access Profile (GAP)](#generic-access-profile-gap)

### Header

Process a 16-bit header (as a hexadecimal string) with the following command:

  ```javascript
    advlib.ble.header.process(rawHexHeader);
  ```

For reference, the 16-bit header is as follows (reading the hexadecimal string from left to right):

| Bit(s) | Function                      |
|-------:|-------------------------------|
| 15     | RxAdd: 0 = public, 1 = random |
| 14     | TxAdd: 0 = public, 1 = random |
| 13-12  | Reserved for Future Use (RFU) |
| 11-8   | Type (see table below)        |
| 7-6    | Reserved for Future Use (RFU) |
| 5-0    | Payload length in bytes       |

And the advertising packet types are as follows:

| Type | Packet           | Purpose                                |
|-----:|------------------|----------------------------------------|
| 0    | ADV_IND          | Connectable undirected advertising     |
| 1    | ADV_DIRECT_IND   | Connectable directed advertising       |
| 2    | ADV_NONCONN_IND  | Non-connectable undirected advertising |
| 3    | SCAN_REQ         | Scan for more info from advertiser     |
| 4    | SCAN_RSP         | Response to scan request from scanner  |
| 5    | CONNECT_REQ      | Request to connect                     |
| 6    | ADV_DISCOVER_IND | Scannable undirected advertising       |

For example:

  ```javascript
    advlib.ble.header.process('4216');
  ```
would yield:

  ```javascript
    {
      rxAdd: "public",
      txAdd: "random",
      type: "ADV_NONCONNECT_IND",
      length: 22
    }
  ```

### Address

Process a 48-bit address (as a hexadecimal string) with the following command:

  ```javascript
    advlib.ble.address.process(rawHexAddress);
  ```
For reference, the 48-bit header is as follows (reading the hexadecimal string from left to right):

| Bit(s) | Address component |
|-------:|-------------------|
| 47-40  | xx:xx:xx:xx:xx:## |
| 39-32  | xx:xx:xx:xx:##:xx |
| 31-24  | xx:xx:xx:##:xx:xx |
| 23-16  | xx:xx:##:xx:xx:xx |
| 15-8   | xx:##:xx:xx:xx:xx |
| 7-0    | ##:xx:xx:xx:xx:xx |

This is best illustrated with an example:

  ```javascript
    advlib.ble.address.process('0123456789ab');
  ```
Would yield:

   ```javascript
    {
      type: "ADVA-48",
      value: "ab8967452301"
    }
   ```
which can alternatively be represented as ab:89:67:45:23:01.


### Data

Process multi-byte entities (as a hexadecimal string) with the following command:

  ```javascript
    advlib.ble.data.process(rawHexAddress);
  ```
For example:

  ```javascript
    advlib.ble.data.process('payload');
  ```
would yield:

  ```javascript
    {
      flags: [ "LE Limited Discoverable Mode", "BR/EDR Not Supported" ],
      completeLocalName: "reelyActive" 
    } 
  ```

#### Generic Access Profile (GAP)

#####Data Types Definitions and Formats

###### UUID 

The Service UUID data type is used to include a list of Service or Service Class UUIDs.

For example in the case where we want to process BLE advertiser data into a Complete 128 Bit UUID, the input payload input need to be 128 bits. Since 128 bits are 16 bytes, which are 16 characters, we would need 32 hexadecimal digits in the payload.

```javascript
  var payload = '33074449555520657669746341796c656572';
  var cursor = 0;
  var advertiserData = {};
```

If we look at the payload in detail,

|               Byte Number(s)     |    Payload component (length, type, uuid)           |
|:---------------------------------|:----------------------------------------------------|
|          32                      | length of hexadecimal string                        |
|          07                      | data type value for 128-bit Service Class UUIDs from   [BLE Assigned Number](https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile)| 
| 4449555520657669746341796c656572 | 128 bit BLE advertiser                              |


This is best illustrated with an example:

  ```javascript
    advlib.ble.data.gap.uuid.complete128BitUUIDs(payload, cursor, advertiserData);
  ```
Which would yield:

```javascript
advData: {
  complete128BitUUIDs: "7265656c794163746976652055554944"
}
```

###### Local Name 

The Local Name data type shall be the complete name, or a shortened version of, the local name assigned to the device.

For example in the case where we want to process BLE advertiser data into a Complete local name, the input payload input would need to be valid [ASCII](http://www.asciitable.com/) code bytes. 

You can use a [converter](https://www.branah.com/ascii-converter) for hex into ASCII and vice versa.

reelyActive in ASCII as a hexadecimal string would be '7265656c79416374697665' as seen below.

```javascript
  var payload = '7265656c79416374697665'
  var cursor = -4;
  var advertiserData = {};
```

This is best illustrated with an example:

```javascript
advlib.ble.data.gap.localname.completeLocalName(payload, cursor, advertiserData);
```
Which would yield:

```javascript
advData: {
  completeLocalName: "reelyActive"
}
```

###### Flags

The Flags data type contains one bit Boolean flags. The Flags field may be zero or more octets long.

| Data Type | Octet | Bit | Description                        |  
|-----------|-------|---- |------------------------------------|
|  Flags    |   0   |  0  | LE Limited Discoverable Mode       |
|           |   0   |  1  | LE General Discoverable Mode       |
|           |   0   |  2  | BR/EDR Not Supported.              |     
|           |   0   |  3  | Simultaneous LE and BR/EDR to Same Device Capable (Controller). |      
|           |   0   |  4  | Simultaneous LE and BR/EDR to Same Device Capable (Host). |
|           |   0   | 5.7 |      Reserved                       |
  
The input payload input could be in five different cases as mentioned in the table above.

For example, if we look at the case for 'BR/EDR Not Supported.' in [flags.js](https://github.com/imranj131/advlib/blob/master/lib/ble/data/gap/flags.js) file, our input arguments would be as follows:

```javascript
  var payload = '020104'
  var cursor = 0;
  var advertiserData = {};
```

If we look at the payload in detail,


|               Byte Number(s)     |    Payload component (length, type, uuid)           |
|:---------------------------------|:----------------------------------------------------|
|          02                      | length of hexadecimal string                        |
|          01                      | data type value for flags from [BLE Assigned Number](https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile)   | 
|          04                      | Octet+Bit                                           |

This is best illustrated with an example:

```javascript
advlib.ble.data.gap.flags.process(payload, cursor, advertiserData);
```
Which would yield:

```javascript
advData: {
  flags: ["BR/EDR Not Supported"]
}
```

###### Manufacturer Specific Data

The first two data octets shall contain a company identifier code from the
Assigned Numbers - Company Identifiers document.

|          Data Type          |        Description             |
|:---------------------------:|:------------------------------:|
| Manufacturer Specific Data  | Size: 2 or more octets. 
|                             | The first 2 octets contain the Company Identifier Code followed by additional manufacturer specific data |

In this case, we have two options of payloads. 

For example in case 1, the BLE advertiser data emits a packet with only company data when the arguments are defined as follows,

```javascript
  var payload = '03ff4c00';
  var cursor = 0;
  var advertiserData = {};
```

If we look at the payload in detail,


|               Byte Number(s)     |    Payload component (length, type, uuid)           |
|:-------------------------------- |:----------------------------------------------------|
|          03                      | length of hexadecimal string                        |
|          ff                      | data type value for manufacturer speicific data from [BLE Assigned Number](https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile)   | 
|         4c00                     | reversed company identifier code  (eg: Apple)       |

This is best illustrated with an example:

    advlib.ble.data.gap.manufacturerspecificdata.process(payload, cursor, advertiserData);

Which would yield:

```javascript
manufacturerSpecificData: {
    companyIdentifierCode: "004c",
    data: "",
}
```


For example in case 2, the BLE advertiser data emits a packet from an iBeacon, when the arguments are defined as follows,

```javascript
  var payload = '23ff4c000215b9407f30f5f8466eaff925556b57fe6d294c903974';
  var cursor = 0;
  var advertiserData = {};
```

If we look at the payload in detail,

|               Byte Number(s)              |Payload component (length, type, uuid) component|
|:------------------------------------------|:---------------------------------------------|
|          23                               | length of hexadecimal string                 |
|          ff                               | data type value for manufacturer specific data from [BLE Assigned Number](https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile) | 
|          4c00                             | Octet+Bit                                    |
|          4c00                             | reversed company identifier code  (eg: Apple)|
|          0215                             | identifier code for iBeacon                  |
| b9407f30f5f8466eaff925556b57fe6d294c903974|          uuid                                |
  
This is best illustrated with an example:

```javascript
advlib.ble.data.gap.manufacturerspecificdata.process(payload, cursor, advertiserData);
```
Which would yield:

```javascript
manufacturerSpecificData: {
  iBeacon: {
    uuid: "b9407f30f5f8466eaff925556b57fe6d",
    major: "294c",
    minor: "9039",
    txPower: "116dBm"
  }
};
```

###### TX Power Level 

The TX Power Level data type indicates the transmitted power level of the
packet containing the data type.

|      Data Type       |      Description        |
|---------------------:|-------------------------|
| TX Power Level       | Size: 1 octet           |
|                      | 0xXX: -127 to +127 dBm  |


###### Slave Connection Interval Range 

The Slave Connection Interval Range data type contains the Peripheral’s
preferred connection interval range, for all logical connections.

>>Table to come here

###### Service Solicitation 

A Peripheral device may send the Service Solicitation data type to invite
Central devices that expose one or more of the services specified in the
Service Solicitation data to connect.
>List of 16 bit Service Solicitation UUIDs
>List of 128 bit Service Solicitation UUIDs

###### Service Data 

The Service Data data type consists of a service UUID with the data associated
with that service.

```javascript
  var payload = '09160a181204eb150000';
  var cursor = 0;
  var advertiserData = {};
```

If we look at the payload in detail,

| Byte Number(s)   |      Payload component (length, type, uuid)        |
|-----------------:|----------------------------------------------------|
|        09        | length of hexadecimal string                       |               
|        16        | data type value for service data                   |
|        0a18      | uuid                                               |
|   1204eb150000   | data                                               |
  
This is best illustrated with an example:

  ```javascript
      advlib.ble.data.gap.servicedata.process(payload, cursor, advertiserData);
  ```
Which would yield:

```javascript
serviceData: {
    uuid : "180a",
    data : "1204eb150000"
};
```


reelyActive RFID Library
------------------------

Process a raw packet (as a hexadecimal string) with the following command:

    advlib.reelyactive.process(rawHexPacket);


What's next?
------------

This is an active work in progress.  Expect regular changes and updates, as well as improved documentation!


License
-------

MIT License

Copyright (c) 2015 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.