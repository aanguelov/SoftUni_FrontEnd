'use strict';

angular.module('issueTracker', [
        'ngRoute',
        'ngResource',
        'issueTracker.home',
        'issueTracker.authentication',
        'issueTracker.notifier'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .otherwise(
                {redirectTo: '/'}
            );
    }])
    .constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');