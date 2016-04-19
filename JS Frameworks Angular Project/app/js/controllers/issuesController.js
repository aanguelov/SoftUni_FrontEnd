angular.module('issueTracker.controllers.issues', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/issues/:id', {
                templateUrl: 'partials/issue-page.html',
                controller: 'ViewIssueController'
            })
            .when('/issues/edit/:id', {
                templateUrl: 'partials/edit-issue.html',
                controller: 'EditIssueController'
            })
    }])
    .controller('ViewIssueController', ['$scope', '$routeParams', 'issues', function($scope, $routeParams, issues) {
        issues.getIssueById($routeParams.id)
            .then(function success(data) {
                console.log(data);
                $scope.currentIssue = data;
                $scope.currentIssueLabels = [];

                data.Labels.forEach(function(label) {
                    $scope.currentIssueLabels.push(label.Name);
                })
            }, function error(err) {

            });
    }])
    .controller('EditIssueController', ['$scope', '$routeParams', 'issues', function($scope, $routeParams, issues) {

    }]);