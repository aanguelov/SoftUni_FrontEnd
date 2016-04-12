'use strict';

app.controller('AppController', [
    '$scope',
    '$location',
    'notifyService',
    'authService',
    function($scope, $location, notifyService, authService) {
    $scope.authService = authService;

    $scope.logout = function() {
        authService.logout();
        notifyService.showInfo('Logout successful');
        $location.path('/');
    }
}]);