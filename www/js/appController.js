// var module = ons.bootstrap('app');
module.controller('appController', function($scope) {
    $scope.load = function(page) {
      console.log("scope " + $scope + " loaded");
      $scope.splitterContent.load(page);
      $scope.splitterSide.close();
    }
    $scope.open = function() {
      console.log("scope " + $scope + " opened");
      $scope.splitterSide.open();
    }
  });
  ons.ready(function() {
    console.log("appController ready");
  }
);