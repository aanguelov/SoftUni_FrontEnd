'use strict';

angular.module('issueTracker.controllers.home', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/partials/common/home.html',
                controller: 'HomeController',
                access: {
                    requiresLogin: true
                }
            })
    }])
    .controller('HomeController', [
        '$scope',
        '$location',
        'authentication',
        'issues',
        'notifyService',
        'PAGE_SIZE',
        function($scope, $location, authentication, issues, notifyService, pageSize) {
            $scope.issuesParams = {
                pageSize: pageSize,
                pageNumber: 1
            };

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
                        $scope.getUserIssues();
                        notifyService.showSuccess('User logged in successfully!');
                    }, function error(err) {
                        notifyService.showError('Login failed!', err);
                    });
            };

            $scope.getUserIssues = function(predicate) {
                var criteria = predicate || 'DueDate';

                if(authentication.isAuthenticated()) {
                    issues.getUserIssues(criteria, $scope.issuesParams)
                        .then(function success(data) {
                            $scope.userIssues = data.Issues;
                            $scope.userIssuesCount = data.TotalPages * $scope.issuesParams.pageSize;
                        }, function error(err) {
                            notifyService.showError('Unable to get issues', err);
                        });
                }
            };

            $scope.getUserIssues();
        }]);