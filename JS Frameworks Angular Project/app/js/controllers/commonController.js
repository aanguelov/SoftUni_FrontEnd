angular.module('issueTracker.common', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/profile/password', {
                templateUrl: 'partials/changePass.html',
                controller: 'HomeController'
            })
    }])
    .controller('CommonController', [
        '$scope',
        '$location',
        'authentication',
        'notifyService',
        function($scope, $location, authentication, notifyService) {

            $scope.isAuthenticated = function() {
                return authentication.isAuthenticated();
            };

            $scope.isAdmin = function() {
                return authentication.isAdmin();
            };

            $scope.logout = function() {
                authentication.logoutUser()
                    .then(function success() {
                        sessionStorage.clear();
                        notifyService.showSuccess('User logged out successfully');
                    }, function error(err) {
                        notifyService.showError('Unsuccessful logout', err);
                    });
            };

            $scope.changePassword = function(user) {
                authentication.changePassword(user)
                    .then(function success() {
                        notifyService.showSuccess('Password changed successfully!');
                        $location.path('/');
                    }, function error(err) {
                        notifyService.showError('Failed to change password.', err);
                    });
            };
        }]);