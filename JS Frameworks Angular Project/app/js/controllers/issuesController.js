angular.module('issueTracker.controllers.issues', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/issues/:id', {
                templateUrl: 'partials/issues/issue-page.html',
                controller: 'ViewIssueController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/issues/edit/:id', {
                templateUrl: 'partials/issues/edit-issue.html',
                controller: 'EditIssueController',
                access: {
                    requiresLogin: true
                }
            })
    }])
    .controller('ViewIssueController', [
        '$scope',
        '$routeParams',
        'issues',
        function($scope, $routeParams, issues) {
            $scope.getIssueById = function() {
                issues.getIssueById($routeParams.id)
                    .then(function success(data) {
                        $scope.currentIssue = data;

                        if(data.Assignee.Id === JSON.parse(sessionStorage['currentUser']).Id) {
                            $scope.isAssignee = true;
                        }else {
                            $scope.isAssignee = false;
                        }

                        $scope.currentIssueLabels = [];

                        data.Labels.forEach(function(label) {
                            $scope.currentIssueLabels.push(label.Name);
                        })
                    }, function error(err) {

                    });
            };

            $scope.changeStatus = function(statusId) {
                //console.log(statusId);
                issues.changeStatus($routeParams.id, statusId)
                    .then(function() {
                        $scope.getIssueById();
                    });
            };

            $scope.getIssueById();

    }])
    .controller('EditIssueController', [
        '$scope',
        '$routeParams',
        '$location',
        'issues',
        'projects',
        function($scope, $routeParams, $location, issues, projects) {
            $scope.allUsers();

            issues.getIssueById($routeParams.id)
                .then(function success(data) {
                    $scope.currentIssue = data;
                    $scope.currentIssueDueDateLocal = new Date(data.DueDate);
                    $scope.issuePriority = data.Priority.Id;
                    $scope.currentIssueLabels = [];

                    data.Labels.forEach(function(label) {
                        $scope.currentIssueLabels.push(label.Name);
                    });

                    projects.showProject(data.Project.Id)
                        .then(function success(data) {
                            $scope.projectPriorities = data.Priorities;
                        });
                }, function error(err) {

                });

            $scope.editIssue = function() {
                if(typeof $scope.currentIssueLabels === 'string') {
                    $scope.currentIssueLabels = $scope.currentIssueLabels.split(',');
                }

                var issueToEdit = {
                    Title: $scope.currentIssue.Title,
                    Description: $scope.currentIssue.Description,
                    DueDate: $scope.currentIssueDueDateLocal,
                    AssigneeId: $scope.currentIssue.Assignee.Id,
                    PriorityId: $scope.issuePriority,
                    Labels: $scope.currentIssueLabels
                };

                issues.editIssue(issueToEdit, $routeParams.id)
                    .then(function success(data) {
                        $location.path('issues/' + data.Id);
                    }, function error(err) {
                        console.log(err);
                    });
            };
    }]);