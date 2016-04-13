angular.module('issueTracker.authentication', [])
    .factory('authentication', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, baseUrl) {
            function register(user) {

                var deferred = $q.defer(),
                    data = {
                        Email: user.username,
                        Password: user.password,
                        ConfirmPassword: user.confirmPassword
                    };

                $http.post(baseUrl + 'api/Account/Register', data);

                return deferred.promise;
            }

            function login(user) {
                var deferred = $q.defer(),
                    data = "grant_type=password&username=" + user.username + "&password=" + user.password;

                $http.post(baseUrl + 'api/Token', data)
                    .then(function success(response) {
                        console.log(response);
                        deferred.resolve(response.data);
                    }, function error(err) {

                    });

                return deferred.promise;
            }

            return {
                registerUser: register,
                loginUser: login
            }
        }
    ]);