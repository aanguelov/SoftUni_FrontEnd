angular.module('issueTracker.controllers.issues', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/issues/:id', {
                templateUrl: 'app/partials/issues/issue-page.html',
                controller: 'ViewIssueController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/issues/edit/:id', {
                templateUrl: 'app/partials/issues/edit-issue.html',
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
        'comments',
        'projects',
        'notifyService',
        function($scope, $routeParams, issues, comments, projects, notifyService) {
            $scope.issueComment = {};

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
                        });

                        projects.getProjectById(data.Project.Id)
                            .then(function success(data) {
                                if(data.Lead.Id === JSON.parse(sessionStorage['currentUser']).Id) {
                                    $scope.isLeadOfProject = true;
                                }else {
                                    $scope.isLeadOfProject = false;
                                }
                            });

                    }, function error(err) {
                        notifyService.showError('Unable to get issue', err);
                    });
            };

            $scope.getIssueComments = function() {
                comments.getIssueComments($routeParams.id)
                    .then(function success(data) {
                        $scope.issueComments = data;
                    }, function error(err) {
                        notifyService.showError('Unable to get comments', err);
                    });
            };

            $scope.changeStatus = function(statusId) {
                issues.changeStatus($routeParams.id, statusId)
                    .then(function() {
                        $scope.getIssueById();
                    }, function error(err) {
                        notifyService.showError('Unable to change status', err);
                    });
            };

            $scope.addComment = function(comment) {
                comments.addCommentToIssue($routeParams.id, comment)
                    .then(function success(data) {
                        $scope.issueComments = data;
                        $scope.issueComment.Text = '';
                    }, function error(err) {
                        notifyService.showError('Unable to add comment', err);
                    });
            };

            $scope.getIssueById();
            $scope.getIssueComments();

    }])
    .controller('EditIssueController', [
        '$scope',
        '$routeParams',
        '$location',
        'issues',
        'projects',
        'notifyService',
        function($scope, $routeParams, $location, issues, projects, notifyService) {
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

                    projects.getProjectById(data.Project.Id)
                        .then(function success(data) {
                            $scope.projectPriorities = data.Priorities;

                            if(data.Lead.Id === JSON.parse(sessionStorage['currentUser']).Id) {
                                $scope.isLeadOfProject = true;
                            }else {
                                $scope.isLeadOfProject = false;
                            }
                        });
                }, function error(err) {
                    notifyService.showError('Unable to get issue', err);
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
                        notifyService.showError('Unable to edit issue', err);
                    });
            };
    }]);