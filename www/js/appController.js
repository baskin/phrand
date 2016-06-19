// var module = ons.bootstrap('app');
module.controller('appController', function($scope) {
    $scope.load = function(page) {
      $scope.splitterContent.load(page);
      $scope.splitterSide.close();
    }
    $scope.open = function() {
      $scope.splitterSide.open();
    }
  });
  ons.ready(function() {
    console.log("appController ready");
  }
);