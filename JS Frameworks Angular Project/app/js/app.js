'use strict';

angular.module('issueTracker', [
        'ngRoute',
        'ngResource'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .otherwise(
                {redirectTo: '/'}
            );
    }]);