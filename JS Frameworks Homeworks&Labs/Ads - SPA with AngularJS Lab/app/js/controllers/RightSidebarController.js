'use strict';

app.controller('RightSidebarController', [
    '$scope',
    '$rootScope',
    'categoriesService',
    'townsService',
    function($scope, $rootScope, categoriesService, townsService) {
        $scope.towns = townsService.getTowns();
        $scope.categories = categoriesService.getCategories();

        $scope.categoryClicked = function(id) {
            $scope.selectedCategoryId = id;
            $rootScope.$broadcast('categorySelectionChanged', id);
        };

        $scope.townClicked = function(id) {
            $scope.selectedTownId = id;
            $rootScope.$broadcast('townSelectionChanged', id);
        };
    }]);