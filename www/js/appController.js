// var module = ons.bootstrap('app');
module.controller('appController', function($scope, $localStorage, $sessionStorage) {

  $scope.$storage = $localStorage;
  $scope.$storage = $localStorage.$default({
      username: "hunter",
      huntq: []
  });
  console.log("Stored username " + $localStorage.username);
  $scope.firstpage = $scope.$storage.username == null ? "welcome.html" : "home.html";

  // $scope.load = function(page) {
  //   console.log("scope " + $scope + " loaded");
  //   $scope.splitterContent.load(page);
  //   $scope.splitterSide.close();
  // }
  // $scope.open = function() {
  //   console.log("scope " + $scope + " opened");
  //   $scope.splitterSide.open();
  // }
});

ons.ready(function() {
    console.log("appController ready");
  }
);