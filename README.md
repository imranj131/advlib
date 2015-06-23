advlib
======

Web front-end for advlib via GitHub Pages.  Currently supports the following protocols:
* [Bluetooth Smart (BLE)](#bluetooth-smart-ble-advertising-packet-library)
* [reelyActive RFID](#reelyactive-rfid-library)

See the [advlib master branch](https://github.com/reelyactive/advlib) for more detailed documentation, or [advlib on npmjs](https://www.npmjs.com/package/advlib).


How we create this using browserify
-----------------------------------

[Browserify](http://browserify.org/) is a beautiful tool which bundles up and concatenates NodeJS modules for use in browser environments.  

To get started with browserify, install browserify globally with npm:

    npm install -g browserify

or

    sudo npm install -g browserify

Now recursively bundle up all the required modules starting at lib/ble/index.js into a single file called advlib.js with the browserify command:

    browserify lib/ble/index.js -o web/js/advlib.js

Finally, drop a single <script> tag into your html and you're done!

    <script src="web/js/advlib.js"></script>



Bluetooth Smart (BLE) Advertising Packet Library
------------------------------------------------

More info to come


reelyActive RFID Library
------------------------

More info to come


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
