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
    'issueTracker.services.comments',
    'issueTracker.services.notifier',
    'issueTracker.directives.templates'
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
    .constant('PAGE_SIZE', 5)
    .run([
        '$rootScope',
        '$location',
        'authentication',
        function($rootScope, $location, authentication) {
            $rootScope.$on('$routeChangeStart', function(event, nextRoute) {
                if(nextRoute.access) {
                    if(nextRoute.access.requiresLogin && !authentication.isAuthenticated()) {
                        $location.path('/');
                    }

                    if(nextRoute.access.requiresAdmin && !authentication.isAdmin()) {
                        $location.path('/');
                    }
                }else {
                    $location.path('/');
                }
            });
    }]);