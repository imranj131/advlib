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


    // Add change function here
    $scope.change = function() {
      console.log("I changed");
      $scope.header = $scope.payload; // FIX THIS : What is the correct variable to pass into $scope.header?
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
      }
      else if($scope.reelyactive.show) {
        $scope.reelyactive.packet = advlib.reelyactive.process($scope.payload);
        $scope.packet = JSON.stringify($scope.reelyactive.packet, null, " ");
      }
    }

  });

  // // ----- Form controller -----
  // .controller("FormCtrl",function($scope) {
  //   // $scope.header = {
  //   //   name: $scope.packet.substr(0,4)
      
  //   // };

  
  //   // $scope.header = {
  //   //   type : { id: 0, id: 1, id: 2, id: 3, id: 4, id: 5, id: 6, id: 7 };
  //   // }

  // });


