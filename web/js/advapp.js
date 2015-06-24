var advlib = require('../../lib/index.js');
var angular = require('angular');

module.exports = angular.module('advapp', [])
  // ----- Interaction controller -----
  .controller("InteractionCtrl", function($scope) {
    $scope.payload = '';
    $scope.header = '';
    $scope.bluetooth = { show: true,
                         tabclass: "selected-tab",
                         packet: {},
                         presets: {} };
    $scope.reelyactive = { show: false,
                           tabclass: "tab",
                           packet: {},
                           presets: {} };
    $scope.packet = $scope.bluetooth.packet;
    $scope.presets = $scope.bluetooth.presets;
                         
    $scope.show = { bluetooth: true, reelyactive: false };
    $scope.tabclass = { bluetooth: 'selected-tab', reelyactive: 'tab' };

    $scope.selectBluetooth = function() {
      $scope.bluetooth.show = true;
      $scope.bluetooth.tabclass = "selected-tab";
      $scope.reelyactive.show = false;
      $scope.reelyactive.tabclass = "tab";
      $scope.packet = $scope.bluetooth.packet;
      $scope.presets = $scope.bluetooth.presets;
    }

    $scope.selectReelyactive = function() {
      $scope.bluetooth.show = false;
      $scope.bluetooth.tabclass = "tab";
      $scope.reelyactive.show = true;
      $scope.reelyactive.tabclass = "selected-tab";
      $scope.packet = $scope.reelyactive.packet;
      $scope.presets = $scope.reelyactive.presets;
    }

  // // Watch function
  //   $scope.$watch(
  //     function(scope) {
  //       console.log( "Function watched" );
  //       return scope.payload.substr(0,4)
  //     },
  //     function() {
  //     }
  //   );

    // Add change function here
    $scope.change = function() {
      console.log("I changed");
      $scope.header = 23232; // FIX THIS : What is the correct variable to pass into $scope.header?
    }
  })

  // ----- Packet controller -----
  .controller("PacketCtrl", function($scope) {
    $scope.bluetooth.presets = [
      { name: "reelyActible", payload: "421655daba50e1fe0201050c097265656c79416374697665" }
    ];
    $scope.reelyactive.presets = [
      { name: "Tag", payload: "1234" }
    ];

    $scope.process = function(item, event) {
      if($scope.bluetooth.show) {
        $scope.bluetooth.packet = advlib.ble.process($scope.payload);
        $scope.packet = JSON.stringify($scope.bluetooth.packet, null, " ");
        $scope.header = $scope.payload.substr(0,4);
      }
      else if($scope.reelyactive.show) {
        $scope.reelyactive.packet = advlib.reelyactive.process($scope.payload);
        $scope.packet = JSON.stringify($scope.reelyactive.packet, null, " ");
        $scope.header = $scope.payload.substr(0,4);
      }
    }

    window.MYSCOPE = $scope;

  });

  // HEADER
  // 1) Header
  //    Watch the first 4 numbers in the payload string and bind it to {{header}} 
  //    (payload.substr(0,4))
  // 2) Header_Type
  //    Watch the 2nd number in the payload string and make it chose the corresponding 'Type' 
  //    from the drop down menu 
  //    (payload.substr(1,1);)
  // 3) rxAdd and txAdd
  //    Not sure yet..
  // 4) Header_Length
  //    var length = parseInt(payload.substr(2,2),16) % 64;

  // ADDRESS
  // 1) Value 
  //     var advAString = payload.substr(10,2);
  //     advAString += payload.substr(8,2);
  //     advAString += payload.substr(6,2);
  //     advAString += payload.substr(4,2);
  //     advAString += payload.substr(2,2);
  //     advAString += payload.substr(0,2);
  
  // DATA
  // 1) UUID 
  // 2) Local Name
  // 3) Flags
  // 4) MSD
  // 5) TXPowerLevel
  // 6) Service Solicitation
  // 7) Service Data


