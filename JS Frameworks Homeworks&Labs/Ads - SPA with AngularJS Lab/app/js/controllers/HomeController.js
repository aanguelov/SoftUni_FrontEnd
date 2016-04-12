'use strict';

app.controller('HomeController', [
    '$scope',
    '$rootScope',
    'adsService',
    'notifyService',
    'pageSize',
    function($scope, $rootScope, adsService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError('Cannot load ads', err);
                }
            )
        };

        $scope.reloadAds();

        $scope.$on('categorySelectionChanged', function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on('townSelectionChanged', function(event, selectedTownId) {
            $scope.adsParams.categoryId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }]);

