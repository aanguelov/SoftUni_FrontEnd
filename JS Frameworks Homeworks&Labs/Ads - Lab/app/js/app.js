'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/');
app.constant('pageSize', 2);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController'
        })
        .when('/user/ads/publish', {
            templateUrl: 'templates/user/publish-new-ad.html',
            controller: 'UserPublishNewAdController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function(event) {
        if($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()) {
            $location.path('/');
        }
    });
}]);
