app.controller('vsController', ['$scope', '$http', 'filterFilter', function($scope, $http, filterFilter) {
    $http.get('videos/videos.json').success(function(data) {
        $scope.videoCollection = data;
        $scope.videos = data;
    });

    $scope.sortByTitle = function() {
        this.videoCollection.sort(function(v1, v2) {
            return v1.title.localeCompare(v2.title);
        });
    };

    $scope.sortByLength = function() {
        this.videoCollection.sort(function(v1, v2) {
            return v1.length.localeCompare(v2.length);
        });
    };

    $scope.sortByDate = function() {
        this.videoCollection.sort(function(v1, v2) {
            return new Date(v1.date) > new Date(v2.date);
        })
    };

    $scope.sortByLikes = function() {
        this.videoCollection.sort(function(v1, v2) {
            return v1.comments[0].likes > v2.comments[0].likes;
        });
    };

    $scope.filterBySubs = function(condition) {
        $scope.videoCollection = $scope.videos;
        $scope.videoCollection = filterFilter($scope.videos, condition);
        //console.log(condition);
    };
}]);