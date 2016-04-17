'use strict';

angular.module('issueTracker.services.users', [])
    .factory('users', ['$http', '$q', 'BASE_URL', function($http, $q, baseUrl) {
        function getAllUsers() {
            var deferred = $q.defer(),
                req = {
                    method: 'GET',
                    url: baseUrl + 'users',
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(sessionStorage['currentUser']).access_token
                    }
                };

            $http(req)
                .then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        return {
            getAllUsers: getAllUsers
        }
    }]);