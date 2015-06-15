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

    var advlib = require('advlib');
    var rawHexPacket = '421655daba50e1fe0201050c097265656c79416374697665';
    var processedPacket = advlib.ble.process(rawHexPacket);
    console.log(JSON.stringify(processedPacket, null, " "));


The console output should appear as follows:

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


    advlib.ble.header.process(rawHexHeader);


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


    advlib.ble.header.process('4216');

would yield:


    {
      rxAdd: "public",
      txAdd: "random",
      type: "ADV_NONCONNECT_IND",
      length: 22
    }


### Address

Process a 48-bit address (as a hexadecimal string) with the following command:

    advlib.ble.address.process(rawHexAddress);

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


    advlib.ble.address.process('0123456789ab');

Would yield:


    {
      type: "ADVA-48",
      value: "ab8967452301"
    }

which can alternatively be represented as ab:89:67:45:23:01.


### Data

Process multi-byte entities (as a hexadecimal string) with the following command:


    advlib.ble.data.process(rawHexAddress);

For example:


    advlib.ble.data.process('payload');

would yield:


    {
      flags: [ "LE Limited Discoverable Mode", "BR/EDR Not Supported" ],
      completeLocalName: "reelyActive" 
    } 


#### UUID 

Process a UUID assigned to the device.

    advlib.ble.data.gap.uuid.nonComplete16BitUUIDs(payload, cursor, advertiserData);
    advlib.ble.data.gap.uuid.complete16BitUUIDs(payload, cursor, advertiserData);
    advlib.ble.data.gap.uuid.nonComplete128BitUUIDs(payload, cursor, advertiserData);
    advlib.ble.data.gap.uuid.complete128BitUUIDs(payload, cursor, advertiserData);
    
    
This is best illustrated with an example:

    var payload = '16074449555520657669746341796c656572';
    advlib.ble.data.gap.uuid.complete128BitUUIDs(payload, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String                       | Description                             |
|-------------|:---------------------------------|:----------------------------------------|
| 0           | 16                               | Length, in bytes, of type and data      |
| 1           | 07                               | GAP Data Type for complete 128-bit UUID | 
| 2 to length | 4449555520657669746341796c656572 | ASCII representation for 'reelyActive UUID'|

Which would add a property to advData as follows:

    advData: {
      complete128BitUUIDs: "7265656c794163746976652055554944"
    }


#### Local Name 

Process a local name (completeLocalName, or shortenedLocalName) of the local name assigned to the device.

    advlib.ble.data.gap.localname.completeLocalName(payload, cursor, advertiserData);
    advlib.ble.data.gap.localname.completeLocalName(payload, cursor, advertiserData);
    
This is best illustrated with an example:

    advlib.ble.data.gap.localname.completeLocalName(12097265656c79416374697665, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String             | Description                             |
|-------------|:-----------------------|:----------------------------------------|
| 0           | 12                     | Length, in bytes, of type and data      |
| 1           | 09                     | GAP Data Type for complete local name   | 
| 2 to length | 7265656c79416374697665 | ASCII representation for 'reelyActive'  |

Which would add a property to advData as follows:

    advData: {
      completeLocalName: "reelyActive"
    }

#### Flags

Process flags assigned to the device.

    advlib.ble.data.gap.flags.process(payload, cursor, advertiserData);
 
For reference, the flags are as follows:

| Bit(s) | Description                                                   |
|-------:|---------------------------------------------------------------|
| 0      | LE Limited Discoverable Mode                                  |
| 1      | LE General Discoverable Mode                                  |
| 2      | BR/EDR Not Supported                                          |
| 3      | Simultaneous LE and BR/EDR to Same Device Capable (Controller)|
| 4      | Simultaneous LE and BR/EDR to Same Device Capable (Host)      |
| 5      | Reserved                                                      |

This is best illustrated with an example:

    advlib.ble.data.gap.flags.process(020104, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String  | Description                         |
|-------------|:------------|:------------------------------------|
| 0           | 02          | Length, in bytes, of type and data  |
| 1           | 01          | GAP Data Type for flags             | 
| 2 to length | 04          | See table above                     |

Which would add a property to advData as follows:

    advData: {
      flags: ["BR/EDR Not Supported"]
    }

#### Manufacturer Specific Data

Process manufacturer specific data assigned to the device.

    advlib.ble.data.gap.manufacturerspecificdata.process(payload, cursor, advertiserData);
  
This is best illustrated with an example:

    advlib.ble.data.gap.manufacturerspecificdata.process(03ff4c00, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String             | Description                                  |
|-------------|:-----------------------|:---------------------------------------------|
| 0           | 03                     | Length, in bytes, of type and data           |
| 1           | ff                     | GAP Data Type for manufacturer specific data | 
| 2 to length | 8c00                   | Gimbal company identifier code (bytes reversed)                                  |

Which would add a property to advData as follows:

    manufacturerSpecificData: {
      companyIdentifierCode: "008c",
      data: "",
    }

In the other case,

    var payload = 26ff4c000215b9407f30f5f8466eaff925556b57fe6d294c903974;
    advlib.ble.data.gap.manufacturerspecificdata.process(payload, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String                                        | Description       |
|-------------|:--------------------------------------------------|:------------------|
| 0           | 26                                                | Length, in bytes, of type and data |
| 1           | ff                                                | GAP Data Type for manufacturer specific data | 
| 2 to length | 4c000215b9407f30f5f8466eaff925556b57fe6d294c903974 | See table below  |

And the type specific data is intepreted as follows:

| Byte(s) | Hex String                      | Description                                  |
|--------:|:--------------------------------|:---------------------------------------------|
| 0-1     | 4c00                            | Apple company identifier code (bytes reversed)|
| 2-3     | 0215                            | Identifier code for iBeacon                  |
| 3-19    | b9407f30f5f8466eaff925556b57fe6d| UUID (assigned by Apple)                     |
| 20-21   | 294c                            | Major                                        |
| 21-22   | 9039                            | Minor                                        |
| 23      | 74                              | TxPower (see TxPower section)                |
 

Which would add a property to advData as follows:

    manufacturerSpecificData: {
      iBeacon: {
        uuid: "b9407f30f5f8466eaff925556b57fe6d",
        major: "294c",
        minor: "9039",
        txPower: "116dBm"
        }
    };

#### TX Power Level 

Process Tx Power Level assigned to the device.

    advlib.ble.data.gap.txpower.process(payload, cursor, advertiserData);
  
This is best illustrated with an example:

    advlib.ble.data.gap.txpower.process(020a7f, 0, {});
    
For reference, the two's complement value is interpreted as follows:

| Hex String  | Power dBm |
|------------:|-----------|
| 7f          | 127 dBm   |
| 00          | 0 dBm     |
| ff          | -128 dBm  |

For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String  | Description                         |
|-------------|:------------|:------------------------------------|
| 0           | 02          | Length, in bytes, of type and data  |
| 1           | 0a          | GAP Data Type for TxPower           | 
| 2 to length | 7f          | See table above                     |

Which would add a property to advData as follows:

    manufacturerSpecificData": {
      iBeacon": {
        txPower": "127dBm"
      }
    }
    

#### Slave Connection Interval Range 

Process Slave Connection Interval Range assigned to the device.

    advlib.ble.data.gap.slaveconnectionintervalrange.process(payload, cursor, advertiserData);
  
This is best illustrated with an example:

    advlib.ble.data.gap.slaveconnectionintervalrange.process(0612072e05354c, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String  | Description                                       |
|-------------|:------------|:--------------------------------------------------|
| 0           | 06          | Length, in bytes, of type and data                |
| 1           | 12          | GAP Data Type for Slave Connection Interval Range | 
| 2 to length | 072e05354c  | See table below                                   |

And the type specific data is intepreted as follows:

| Byte(s) | Hex String | Description                                   |
|--------:|:-----------|:----------------------------------------------|
| 0-3     | 072e05     | The first 2 octets defines the minimum value for
the connection interval in the following manner:
connIntervalmin = Conn_Interval_Min * 1.25 ms
Conn_Interval_Min range: 0x0006 to 0x0C80)|
| 4-5     | 354c       | The other 2 octets defines the maximum value for
the connection interval in the following manner:
connIntervalmax = Conn_Interval_Max * 1.25 ms
Conn_Interval_Max range: 0x0006 to 0x0C80 |


Which would add a property to advData as follows:

    slaveConnectionIntervalRange": '072e05354c';
      
#### Service Solicitation 



#### Service Data 

Process service data assigned to the device.

    advlib.ble.data.gap.servicedata.process(payload, cursor, advertiserData);
 
This is best illustrated with an example:

    advlib.ble.data.gap.servicedata.process(09160a181204eb150000, 0, {});
    
For reference, the example payload is interpreted as follows:

| Byte(s)     | Hex String           | Description                         |
|-------------|:---------------------|:------------------------------------|
| 0           | 09                   | Length, in bytes, of type and data  |
| 1           | 16                   | GAP Data Type for service data      | 
| 2 to length | 09160a181204eb150000 | See table below                     |

And the type specific data is intepreted as follows:

| Byte(s) | Hex String   | Description     |
|--------:|:-------------|:----------------|
| 0-1     | 0a18         | UUID (reversed) |
| 2-6     | 1204eb150000 | Data            |

Which would add a property to advData as follows:

    serviceData: {
      uuid : "180a",
      data : "1204eb150000"
    };


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