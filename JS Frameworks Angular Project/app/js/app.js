'use strict';

angular.module('issueTracker', [
        'ngRoute',
        'ngResource',
        'issueTracker.home',
        'issueTracker.common',
        'issueTracker.authentication',
        'issueTracker.notifier'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise(
                {redirectTo: '/'}
            );
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/')
    .run(['$rootScope', '$location', 'authentication', function($rootScope, $location, authentication) {
        $rootScope.$on('$locationChangeStart', function(event) {
            if(!authentication.isAuthenticated()) {
                $location.path('/');
            }
        });
    }]);