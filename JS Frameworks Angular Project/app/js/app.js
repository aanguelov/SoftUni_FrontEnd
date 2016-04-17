'use strict';

angular.module('issueTracker', [
        'ngRoute',
        'ngResource',
        'issueTracker.controllers.home',
        'issueTracker.controllers.common',
        'issueTracker.controllers.projects',
        'issueTracker.services.authentication',
        'issueTracker.services.projects',
        'issueTracker.services.users',
        'issueTracker.services.notifier'
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