'use strict';

angular.module('issueTracker.controllers.projects', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/projects', {
                templateUrl: 'app/partials/projects/allProjects.html',
                controller: 'ProjectsController',
                access: {
                    requiresAdmin: true
                }
            })
            .when('/projects/my', {
                templateUrl: 'app/partials/projects/myProjects.html',
                controller: 'MyProjectsController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/add', {
                templateUrl: 'app/partials/projects/addProject.html',
                controller: 'ProjectsController',
                access: {
                    requiresAdmin: true
                }
            })
            .when('/projects/:id', {
                templateUrl: 'app/partials/projects/project-page.html',
                controller: 'ViewProjectController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/edit/:id', {
                templateUrl: 'app/partials/projects/edit-project.html',
                controller: 'EditProjectController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/add-issue/:id', {
                templateUrl: 'app/partials/issues/addIssue.html',
                controller: 'AddIssueToProjectController',
                access: {
                    requiresLogin: true
                }
            })
    }])
    .controller('ProjectsController', [
        '$scope',
        '$location',
        'projects',
        'notifyService',
        'PAGE_SIZE',
        function($scope, $location, projects, notifyService, pageSize) {
            $scope.projectsParams = {
                pageSize: pageSize,
                pageNumber: 1
            };

            $scope.allUsers();

            $scope.addProject = function(project) {
                projects.addProject(project)
                    .then(function success(data) {
                        $location.path('projects/' + data.Id);
                    }, function error(err) {
                        notifyService.showError('Unable to add project', err);
                    });
            };

            $scope.getAllProjects = function() {
                projects.getAllProjects($scope.projectsParams)
                    .then(function success(data) {
                        $scope.allProjects = data.Projects;
                        $scope.projectsCount = data.TotalPages * $scope.projectsParams.pageSize;
                    }, function error(err) {
                        notifyService.showError('Unable to get projects', err);
                    });
            };

            $scope.getAllProjects();
    }])
    .controller('ViewProjectController', [
        '$scope',
        '$routeParams',
        'projects',
        'notifyService',
        function($scope, $routeParams, projects, notifyService) {

            projects.getProjectById($routeParams.id)
                .then(function success(data) {
                    $scope.currentProject = data;

                    if(data.Lead.Id === JSON.parse(sessionStorage['currentUser']).Id) {
                        $scope.isLeadOfProject = true;
                    }else {
                        $scope.isLeadOfProject = false;
                    }

                    $scope.currentProjectLabels = [];
                    $scope.currentProjectPriorities = [];

                    data.Labels.forEach(function(l) {
                        $scope.currentProjectLabels.push(l.Name);
                    });

                    data.Priorities.forEach(function(p) {
                        $scope.currentProjectPriorities.push(p.Name);
                    });
                }, function error(err) {
                    notifyService.showError('Unable to get project', err);
                });

            projects.getIssues($routeParams.id)
                .then(function success(issuesData) {
                    $scope.currentProjectIssues = issuesData;
                    $scope.currentProjectIssuesAssignees = [];
                    $scope.currentProjectIssuesPriorities = [];

                    issuesData.forEach(function(issue) {

                        if($scope.currentProjectIssuesAssignees.indexOf(issue.Assignee.Username) === -1) {
                            $scope.currentProjectIssuesAssignees.push(issue.Assignee.Username);
                        }

                        if($scope.currentProjectIssuesPriorities.indexOf(issue.Priority.Name) === -1) {
                            $scope.currentProjectIssuesPriorities.push(issue.Priority.Name);
                        }
                    });
                }, function error(err) {
                    notifyService.showError('Unable to get issues', err);
                });
    }])
    .controller('EditProjectController', [
        '$scope',
        '$routeParams',
        '$location',
        'projects',
        'notifyService',
        function($scope, $routeParams, $location, projects, notifyService) {

            $scope.allUsers();

            function getArrayOfStrings(str) {
                return str.split(',');
            }

            projects.getProjectById($routeParams.id)
                .then(function success(data) {
                    $scope.currentProject = data;

                    $scope.currentProjectLabels = [];
                    $scope.currentProjectPriorities = [];

                    data.Labels.forEach(function(l) {
                        $scope.currentProjectLabels.push(l.Name);
                    });

                    data.Priorities.forEach(function(p) {
                        $scope.currentProjectPriorities.push(p.Name);
                    });

                    if(data.Lead.Id === JSON.parse(sessionStorage['currentUser']).Id) {
                        $scope.isLeadOfProject = true;
                    }else {
                        $scope.isLeadOfProject = false;
                    }

                }, function error(err) {
                    notifyService.showError('Unable to get project', err);
                });

            $scope.editProject = function() {
                if(typeof $scope.currentProjectLabels === 'string') {
                    $scope.currentProjectLabels = getArrayOfStrings($scope.currentProjectLabels);
                }
                if(typeof $scope.currentProjectPriorities === 'string') {
                    $scope.currentProjectPriorities = getArrayOfStrings($scope.currentProjectPriorities);
                }

                var projectForEdit = {
                    Name: $scope.currentProject.Name,
                    Description: $scope.currentProject.Description,
                    Priorities: $scope.currentProjectPriorities,
                    Labels: $scope.currentProjectLabels,
                    LeadId: $scope.currentProject.Lead.Id
                };

                projects.editProject(projectForEdit, $routeParams.id)
                    .then(function success(data) {
                        $location.path('projects/' + data.Id)
                    }, function error(err) {
                        notifyService.showError('Unable to edit project', err);
                    });
            };
    }])
    .controller('AddIssueToProjectController', [
        '$scope',
        '$routeParams',
        '$location',
        'projects',
        'notifyService',
        function($scope, $routeParams, $location, projects, notifyService) {
            $scope.allUsers();

            projects.getProjectById($routeParams.id)
                .then(function success(data) {
                    $scope.projectPriorities = data.Priorities;
                });

            $scope.addIssueToProject = function(issueToAdd) {

                var issueToSend = {
                    Title: issueToAdd.Title,
                    Description: issueToAdd.Description,
                    DueDate: issueToAdd.DueDate,
                    ProjectId: $routeParams.id,
                    AssigneeId: issueToAdd.AssigneeId,
                    PriorityId: issueToAdd.PriorityId,
                    Labels: issueToAdd.Labels.split(',')
                };

                projects.addIssueToProject(issueToSend)
                    .then(function success(data) {
                        $location.path('projects/' + data.Project.Id)
                    }, function error(err) {
                        notifyService.showError('Unable to add issue', err);
                    });
            };
    }])
    .controller('MyProjectsController', [
        '$scope',
        'projects',
        'PAGE_SIZE',
        'notifyService',
        function($scope, projects, pageSize, notifyService) {
            $scope.myProjectsParams = {
                pageSize: pageSize,
                pageNumber: 1
            };

            $scope.getMyProjects = function() {
                projects.getUserProjects($scope.myProjectsParams)
                    .then(function success(data) {
                        $scope.myProjects = data.Projects;
                        $scope.myTotalProjects = data.TotalCount;
                    }, function error() {
                        notifyService.showError('Unable to get user projects.', err);
                    });
            };

            $scope.getMyProjects();
    }]);