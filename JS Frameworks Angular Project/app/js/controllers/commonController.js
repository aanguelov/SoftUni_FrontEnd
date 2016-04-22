'use strict';

angular.module('issueTracker.controllers.common', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/profile/password', {
                templateUrl: 'app/partials/common/changePass.html',
                controller: 'CommonController',
                access: {
                    requiresLogin: true
                }
            })
    }])
    .controller('CommonController', [
        '$scope',
        '$location',
        'authentication',
        'users',
        'notifyService',
        function($scope, $location, authentication, users, notifyService) {

            $scope.isAuthenticated = function() {
                return authentication.isAuthenticated();
            };

            $scope.isAdmin = function() {
                return authentication.isAdmin();
            };

            $scope.logout = function() {
                authentication.logoutUser()
                    .then(function success() {
                        sessionStorage.clear();
                        notifyService.showSuccess('User logged out successfully');
                        $location.path('/');
                    }, function error(err) {
                        notifyService.showError('Unsuccessful logout', err);
                    });
            };

            $scope.changePassword = function(user) {
                authentication.changePassword(user)
                    .then(function success() {
                        notifyService.showSuccess('Password changed successfully!');
                        $location.path('/');
                    }, function error(err) {
                        notifyService.showError('Failed to change password.', err);
                    });
            };

            $scope.allUsers = function() {
                users.getAllUsers()
                    .then(function success(response) {
                        $scope.users = response;
                    }, function error(err) {
                        notifyService.showError('Unable to get all users', err)
                    });
            }
        }]);