var advlib = require('../../lib/index.js');
var angular = require('angular');

module.exports = angular.module('advapp', [])

// ----- Interaction controller -----

.controller("InteractionCtrl", function ($scope) {
    $scope.payload = '';
    $scope.header = '';
    $scope.bluetooth = {
        show: true,
        tabclass: "selected-tab",
        packet: {},
        presets: {}
    };
    $scope.reelyactive = {
        show: false,
        tabclass: "tab",
        packet: {},
        presets: {}
    };
    $scope.packet = $scope.bluetooth.packet;
    $scope.presets = $scope.bluetooth.presets;

    $scope.show = {
        bluetooth: true,
        reelyactive: false
    };
    $scope.tabclass = {
        bluetooth: 'selected-tab',
        reelyactive: 'tab'
    };

    $scope.selectBluetooth = function () {
        $scope.bluetooth.show = true;
        $scope.bluetooth.tabclass = "selected-tab";
        $scope.reelyactive.show = false;
        $scope.reelyactive.tabclass = "tab";
        $scope.packet = $scope.bluetooth.packet;
        $scope.presets = $scope.bluetooth.presets;
    }

    $scope.selectReelyactive = function () {
        $scope.bluetooth.show = false;
        $scope.bluetooth.tabclass = "tab";
        $scope.reelyactive.show = true;
        $scope.reelyactive.tabclass = "selected-tab";
        $scope.packet = $scope.reelyactive.packet;
        $scope.presets = $scope.reelyactive.presets;
    }
})

// ----- Packet controller -----

.controller("PacketCtrl", function ($scope) {
    $scope.bluetooth.presets = [
      {
        name: "reelyActible",
        payload: "421655daba50e1fe0201050c097265656c79416374697665"
      },
      {
        name: "TrackR",
        payload: "40239dd02fcbafe20409746b7203194002020106020a0403033e0f09ff00009dd02fcbafe2"
      },
      {
        name: "Apple TV",
        payload: "0015415df17b209c02011a0bff4c0009060202c0a8006a"
      },
      {
        name: "Roximity",
        payload: "42243cae3eb8ebe00201061aff4c0002158deefbb9f7384297804096668bb4428100012258c5"
      },
      {
        name: "UriBeacon",
        payload: "4220f60032be32c20201040303d8fe1216d8fe00f2027265656c7961637469766507"
      },
      {
        name: "Tile",
        payload: "400dc3dc80ee20e40201060303edfe"
      },
      {
        name: "Fitbit",
        payload: "4025b2a86b4f01d90201041106ba5689a6fabfa2bd01467d6e00fbabad09160a181204eb150000"
      },
      {
        name: "reelyActive Bluetooth Smart reelceiver (RA-R436)",
        payload: "061b9e5ed0f7b13402010611074449555520657669746341796c656572"
      }
    ];
    $scope.reelyactive.presets = [{
        name: "Tag",
        payload: "1234"
    }];

    $scope.process = function (item, event) {
        if ($scope.bluetooth.show) {
            $scope.bluetooth.packet = advlib.ble.process($scope.payload);
            $scope.packet = JSON.stringify($scope.bluetooth.packet, null, " ");

            // Defined for ng-keyup function process() calls
            $scope.header = $scope.payload.substr(0, 4);
            $scope.address = advlib.ble.address.process($scope.payload);
        } else if ($scope.reelyactive.show) {
            $scope.reelyactive.packet = advlib.reelyactive.process($scope.payload);
            $scope.packet = JSON.stringify($scope.reelyactive.packet, null, " ");
        }
    }

    window.MYSCOPE = $scope; // In order to access scope on console (to be removed when not testing)

})

// ----- DropDown controller -----

.controller('DropDownCtrl', function ($scope) {
    $scope.msd = [{
        abbreviation: 'Gen',
        name: 'Generic',
        properties: ['companyIdentifierCode', 'data']
    }, {
        abbreviation: 'iB',
        name: 'iBeacon',
        properties: ['uuid', 'major', 'minor', 'txPower']
    }];
    this.setTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
        return this.tab === checkTab;
    };
    this.notSelected = function (checkTab) {
        return !(this.isSelected(checkTab));
    };
    this.getTab = function () {
        return this.tab;
    };
    this.setIsDefault = function () {
        this.isDefault = true;
    };
    this.getIsDefault = function () {
        return this.isDefault;
    };
});

//      TO DO LIST
// -------------------
// HEADER 
// 1) Header ---> DONE
//    See line 57

// 2) Type ---> DONE 

// 3) rxAdd and txAdd ---> DONE

// 4) Length ---> DONE

// ADDRESS
// 1) Value ---> DONE
//    See line 58

// DATA
// 1) UUID ---> not sure
// 2) Local Name ---> not sure
// 3) Flags ---> DONE
// 4) MSD ---> DONE
// 5) TXPowerLevel ---> not sure
// 6) Service Solicitation ---> not sure
// 7) Service Data ---> not sure