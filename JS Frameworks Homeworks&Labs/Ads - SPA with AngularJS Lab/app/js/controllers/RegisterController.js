'use strict';

app.controller('RegisterController', [
    '$scope',
    '$location',
    'townsService',
    'authService',
    'notifyService',
    function($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};

        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(
                userData,
                function success() {
                    notifyService.showInfo('You have registered successfully and may login now.');
                    $location.path('/');
                },
                function error(err) {
                    notifyService.showError('Failed registration', err);
                }
            );
        };
    }]);