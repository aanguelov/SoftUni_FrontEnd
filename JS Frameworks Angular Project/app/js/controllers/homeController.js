angular.module('issueTracker.home', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/login&register.html',
                controller: 'HomeController'
            })
    }])
    .controller('HomeController', ['$scope', 'authentication', function($scope, authentication) {
        $scope.register = function(user) {
            authentication.registerUser(user)
                .then(function() {
                    sessionStorage['register'] = 'success';
                });
        };

        $scope.login = function(user) {
            authentication.loginUser(user)
                .then(function(userData) {
                    sessionStorage['access_token'] = userData.access_token;
                });
        }
    }]);