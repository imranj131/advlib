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

        // Defined for ng-keyup function process() calls
        $scope.header = $scope.payload.substr(0,4);
        $scope.address = advlib.ble.address.process($scope.payload);
      }
      else if($scope.reelyactive.show) {
        $scope.reelyactive.packet = advlib.reelyactive.process($scope.payload);
        $scope.packet = JSON.stringify($scope.reelyactive.packet, null, " ");
      }
    }

    window.MYSCOPE = $scope; // In order to access scope on console (to be removed when not testing)

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


