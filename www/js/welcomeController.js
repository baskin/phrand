module.controller('welcomeController', function($scope) {

    console.log("WelcomeController loaded");
    if ($scope.$storage.username != null) {
        console.log("Skipping welcome, since found stored username " + $scope.$storage.username);
        setTimeout(function() {
            $scope.nav.pushPage('home.html');
        }, 2000);
    }
});