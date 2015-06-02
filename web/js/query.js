angular.module("advlib", [])

  // Query controller
  .controller("QueryCtrl", function($scope) {
    $scope.result = 'This is the result'; 
    $scope.payload = 'This is the payload';

    // Watch for changes in the identifier field
    $scope.$watch(function(scope) { return scope.payload },
                  process);

    // Redirect on search button click
    function process(newPayload, oldPayload) {

     $scope.result = newPayload;
    }
  });