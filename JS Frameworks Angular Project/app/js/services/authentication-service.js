'use strict';

angular.module('issueTracker.authentication', [])
    .factory('authentication', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, baseUrl) {
            function register(user) {

                var deferred = $q.defer();

                var req = {
                    method: 'POST',
                    url: baseUrl + 'api/Account/Register',
                    data: {
                        Email: user.username,
                        Password: user.password,
                        ConfirmPassword: user.confirmPassword
                    }
                };

                $http(req)
                    .then(function success() {
                        deferred.resolve();
                    }, function error(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            function login(user) {
                var deferred = $q.defer();

                var req = {
                    method: 'POST',
                    url: baseUrl + 'api/Token',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: "grant_type=password&username=" + user.username + "&password=" + user.password
                };

                $http(req)
                    .then(function success(response) {
                        console.log(response);
                        deferred.resolve(response.data);
                    }, function error(err) {
                        console.log(err);
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            function logout() {
                var deferred = $q.defer();

                var req = {
                    method: 'POST',
                    url: baseUrl + 'api/Account/Logout',
                    headers: {
                        'Authorization': 'Bearer' + sessionStorage['access_token']
                    },
                    data: { test: 'test' }
                };

                $http(req)
                    .then(function success() {
                        deferred.resolve();
                    }, function error(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            return {
                registerUser: register,
                loginUser: login,
                logoutUser: logout
            }
        }
    ]);