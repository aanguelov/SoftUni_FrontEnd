'use strict';

angular.module('issueTracker', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap.pagination',
    'issueTracker.controllers.home',
    'issueTracker.controllers.common',
    'issueTracker.controllers.projects',
    'issueTracker.controllers.issues',
    'issueTracker.services.authentication',
    'issueTracker.services.projects',
    'issueTracker.services.users',
    'issueTracker.services.issues',
    'issueTracker.services.notifier'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .otherwise(
                    {redirectTo: '/'}
                );
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/')
    .constant('PAGE_SIZE', 3)
    .run([
        '$rootScope',
        '$location',
        'authentication',
        function($rootScope, $location, authentication) {
            $rootScope.$on('$locationChangeStart', function(event) {
                if(!authentication.isAuthenticated()) {
                    $location.path('/');
                }
            });
    }]);