'use strict';

app.factory('userService', [
    '$http',
    'baseServiceUrl',
    'authService',
    function($http, baseServiceUrl, authService) {
        return {
            createNewAd: function(adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + 'api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },
            deactivateAd: function(id, success, error) {

            },
            publishAgainAd: function(id, success, error) {

            }
        }
}]);