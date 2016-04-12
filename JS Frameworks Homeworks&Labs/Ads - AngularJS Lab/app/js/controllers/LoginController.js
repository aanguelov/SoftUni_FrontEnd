'use strict';

app.controller('LoginController', [
    '$scope',
    '$location',
    'authService',
    'notifyService',
    function($scope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(
                userData,
                function success() {
                    notifyService.showInfo('Login successful');
                    $location.path('/');
                },
                function error(err) {
                    notifyService.showError('Unsuccessful login', err);
                }
            );
        };
    }]);