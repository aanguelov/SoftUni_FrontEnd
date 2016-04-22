'use strict';

angular.module('issueTracker.services.authentication', [])
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
                        var userData = response.data;

                        var userInfoReq = {
                            method: 'GET',
                            url: baseUrl + 'users/me',
                            headers: { Authorization: 'Bearer ' + userData.access_token }
                        };

                        $http(userInfoReq)
                            .then(function success(data) {
                                userData.isAdmin = data.data.isAdmin;
                                userData.Id = data.data.Id;
                                sessionStorage['currentUser'] = JSON.stringify(userData);
                                deferred.resolve(data);
                            }, function error(err) {
                                deferred.reject(err);
                            });

                    }, function error(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            function logout() {
                var deferred = $q.defer(),
                    currentUser = getUser();

                var req = {
                    method: 'POST',
                    url: baseUrl + 'api/Account/Logout',
                    headers: {
                        'Authorization': 'Bearer ' + currentUser.access_token
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

            function getUser() {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            }

            function changePassword(user) {
                var deferred = $q.defer(),
                    currentUser = getUser(),
                    data = 'OldPassword=' + user.oldPassword +
                        '&NewPassword=' + user.newPassword +
                        '&ConfirmPassword=' + user.newPasswordConfirm;

                var req = {
                    method: 'POST',
                    url: baseUrl + 'api/Account/ChangePassword',
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + currentUser.access_token
                    }
                };

                $http(req)
                    .then(function success() {
                        deferred.resolve()
                    }, function error(err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }

            return {
                registerUser: register,
                loginUser: login,
                logoutUser: logout,
                getCurrentUser: getUser,
                changePassword: changePassword,
                isAuthenticated: function() {
                    return sessionStorage['currentUser'] != undefined;
                },
                isAdmin: function() {
                    var currentUser = getUser();
                    return (currentUser != undefined) && (currentUser.isAdmin);
                }
            }
        }
    ]);