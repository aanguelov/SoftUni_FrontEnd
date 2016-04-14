'use strict';

angular.module('issueTracker.identity', [])
    .factory('identity', ['$http', '$q', 'BASE_URL', function($http, $q, baseUrl) {
        var deferred = $q.defer(),
            currentUser = undefined;

        var req = {
            method: 'GET',
            url: baseUrl + 'users/me',
            headers: {
                'Authorization': 'Bearer' + sessionStorage['access_token']
            }
        };

        $http(req)
            .then(function success(response) {
                currentUser = response.data;
                deferred.resolve(currentUser);
            });

        return {
            getCurrenttUser: function() {

            }
        }
    }]);