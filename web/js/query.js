var advlib = require('../../lib/ble/index.js');
var angular = require('angular');

module.exports = angular.module("advlib", [])
  .controller("QueryCtrl", function($scope) {

    // Query controller
    $scope.result = 'This is the result'; 
    $scope.payload = 'This is the payload';

    //Function Query
    $scope.process = function(item, event) {
      console.log("I pressed the button");  
      $scope.result = advlib.process($scope.payload); //example payload : 421655daba50e1fe0201050c097265656c79416374697665  
      console.log("Process works!")     
  }

// // Watch for changes in the identifier field
//   $scope.$watch(function($scope) {
//     console.log('you typed'+scope);
//       return $scope.payload },
//    process);

// // Redirect on search button click
//   function process(newPayload, oldPayload) {
//     $scope.result = newPayload;
// }

});


