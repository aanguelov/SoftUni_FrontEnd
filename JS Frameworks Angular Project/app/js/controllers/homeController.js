angular.module('issueTracker.home', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/login&register.html',
                controller: 'HomeController'
            })
    }])
    .controller('HomeController', [
        '$scope',
        '$location',
        'authentication',
        'notifyService',
        function($scope, $location, authentication, notifyService) {

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
                        sessionStorage['access_token'] = userData.access_token;
                        notifyService.showSuccess('User logged in successfully!');
                    }, function error(err) {
                        notifyService.showError('Login failed!', err);
                    });
            };

            $scope.logout = function() {
                authentication.logoutUser()
                    .then(function success() {
                        delete sessionStorage['access_token'];
                        notifyService.showSuccess('User logged out successfully!');
                    }, function error(err) {
                        notifyService.showError('Logout unsuccessful', err);
                    });
            }
        }]);