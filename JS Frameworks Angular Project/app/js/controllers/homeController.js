'use strict';

angular.module('issueTracker.controllers.home', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
    }])
    .controller('HomeController', [
        '$scope',
        '$location',
        'authentication',
        'notifyService',
        function($scope, $location, authentication, notifyService) {

            $scope.register = function(user) {
                authentication.registerUser(user)
                    .then(function success() {
                        notifyService.showSuccess('User registered successfully!');
                        $scope.login(user);
                    }, function error(err) {
                        notifyService.showError('Registration failed!', err);
                    });
            };

            $scope.login = function(user) {
                authentication.loginUser(user)
                    .then(function success(userData) {
                        notifyService.showSuccess('User logged in successfully!');
                    }, function error(err) {
                        notifyService.showError('Login failed!', err);
                    });
            };
        }]);