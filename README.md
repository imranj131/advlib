advlib
======

Library for wireless advertising packet decoding.  Currently supports the following protocols:
* [Bluetooth Smart (BLE)](#bluetooth-smart-ble-advertising-packet-library)
* [reelyActive RFID](#reelyactive-rfid-library)


Installation
------------

    npm install advlib


Hello advlib
------------

```javascript
var advlib = require('advlib');

var rawHexPacket = '421655daba50e1fe0201050c097265656c79416374697665';
var processedPacket = advlib.ble.process(rawHexPacket);

console.log(JSON.stringify(processedPacket, null, " "));
```

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

The library is organised hierarchically so that the separate elements of a packet can be processed individually.  Refer to the index below for details on each element:

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

    advlib.ble.data.process('');

would yield:

    {
      flags: [ "LE Limited Discoverable Mode", "BR/EDR Not Supported" ],
      completeLocalName: "reelyActive" 
    } 

#### Generic Access Profile (GAP)

#####Data Types Definitions and Formats

###### UUID 
>>Description to come here

The Service UUID data type is used to include a list of Service or Service Class UUIDs.

|          Data Type               |        Description             |
|---------------------------------:|--------------------------------|
| Incomplete List of 16-bit UUIDs  | More 16-bit UUIDs available    |
| Complete List of 16-bit UUIDs    | Complete list of 16-bit UUIDs  |
| Incomplete List of 128-bit UUIDs | More 128-bit UUIDs available   |
| Complete List of 128-bit UUIDs   | Complete list of 128-bit UUIDs |

###### Local Name 
>>Description to come here

The Local Name data type shall be the same as, or a shortened version of, the
local name assigned to the device.
>Shotened local name
>Complete local name

###### Flags
>>Description to come here

The Flags data type contains one bit Boolean flags. The Flags field may be zero or more octets long.

| Data Type | Octet | Bit | Description                        |  
|-----------|-------|---- |------------------------------------|
|  Flags    |   0   |  0  | LE Limited Discoverable Mode       |
|           |   0   |  1  | LE General Discoverable Mode       |
|           |   0   |  2  | BR/EDR Not Supported.              |     
|           |   0   |  3  | Simultaneous LE and BR/EDR to Same Device Capable (Controller). |      
|           |   0   |  4  | Simultaneous LE and BR/EDR to Same Device Capable (Host). |
|           |   0   | 5.7 |      Reserved                       |
  

###### Manufacturer Specific Data 
>>Description to come here

The first two data octets shall contain a company identifier code from the
Assigned Numbers - Company Identifiers document.

|          Data Type          |        Description             |
|----------------------------:|--------------------------------|
| Manufacturer Specific Data  | Size: 2 or more octets. 
|                             | The first 2 octets contain the Company Identifier Code followed by additional manufacturer specific data |

###### TX Power Level 
>>Description to come here

The TX Power Level data type indicates the transmitted power level of the
packet containing the data type.

|      Data Type       |      Description        |
|---------------------:|-------------------------|
| TX Power Level       | Size: 1 octet           |
|                      | 0xXX: -127 to +127 dBm  |


###### Slave Connection Interval Range 
>>Description to come here

The Slave Connection Interval Range data type contains the Peripheral’s
preferred connection interval range, for all logical connections.

|      Data Type                  |      Description                         |
|---------------------------------|------------------------------------------|
| Slave Connection Interval Range |  Size: 4 Octets                          |

The first 2 octets defines the minimum  value for the connection interval in the following manner:

>connIntervalmin = Conn_Interval_Min * 1.25 ms
>Conn_Interval_Min range: 0x0006 to 0x0C80

Value of 0xFFFF indicates no specific minimum.
Values not defined above are reserved.   

The other 2 octets defines the maximum 
value for the connection interval in the following manner:

>connIntervalmax = Conn_Interval_Max * 1.25 ms 
>Conn_Interval_Max range: 0x0006 to 0x0C80 

Conn_Interval_Max shall be equal to or greater than the Conn_Interval_Min. 
Value of 0xFFFF indicates no specific maximum.
Values not defined above are reserved.    

###### Service Solicitation 
>>Description to come here

A Peripheral device may send the Service Solicitation data type to invite
Central devices that expose one or more of the services specified in the
Service Solicitation data to connect.
>List of 16 bit Service Solicitation UUIDs
>List of 128 bit Service Solicitation UUIDs

###### Service Data 
>>Description to come here

The Service Data data type consists of a service UUID with the data associated
with that service.

|      Data Type                  |             Description                 |
|------------------------------- :|-----------------------------------------|
| Service Data - 16 bit UUIDs     |    Size: 2 or more octets               |
|                                 | The first 2 octets contain the 16 bit Service UUID followed by additional service data                            | 
| Service Data - 128 bit UUID    | Size: 16 or more octets                  |
|                                 |The first 16 octets contain the 128 bit Service UUID followed by additional service data|


###### Generic Data 
>>Description to come here

###### Company Identifier 
>>Description to come here

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