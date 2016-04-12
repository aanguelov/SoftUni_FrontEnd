'use strict';

app.controller('UserPublishNewAdController', [
    '$scope',
    '$location',
    'townsService',
    'categoriesService',
    'userService',
    'notifyService',
    function($scope, $location, townsService, categoriesService, userService, notifyService) {
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.publishAd = function(adData) {
            userService.createNewAd(
                adData,
                function success() {
                    notifyService.showInfo('New ad created!');
                    $location.path('/user/ads');
                },
                function error(err) {
                    notifyService.showError('Failed to create new add!', err);
                }
            );
        };

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0],
                reader;

            if(file.type.match(/image\/.*/)) {
                reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $('.image-box').html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            }else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
}]);