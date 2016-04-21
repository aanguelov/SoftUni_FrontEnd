'use strict';

angular.module('issueTracker.controllers.projects', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/projects', {
                templateUrl: 'partials/projects/allProjects.html',
                controller: 'ProjectsController',
                access: {
                    requiresAdmin: true
                }
            })
            .when('/projects/my', {
                templateUrl: 'partials/projects/myProjects.html',
                controller: 'MyProjectsController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/add', {
                templateUrl: 'partials/projects/addProject.html',
                controller: 'ProjectsController',
                access: {
                    requiresAdmin: true
                }
            })
            .when('/projects/:id', {
                templateUrl: 'partials/projects/project-page.html',
                controller: 'ViewProjectController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/edit/:id', {
                templateUrl: 'partials/projects/edit-project.html',
                controller: 'EditProjectController',
                access: {
                    requiresLogin: true
                }
            })
            .when('/projects/add-issue/:id', {
                templateUrl: 'partials/issues/addIssue.html',
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
        'PAGE_SIZE',
        function($scope, $location, projects, pageSize) {
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
                        console.log(err);
                    });
            };

            $scope.getAllProjects = function() {
                projects.getAllProjects($scope.projectsParams)
                    .then(function success(data) {
                        $scope.allProjects = data.Projects;
                        $scope.projectsCount = data.TotalPages * $scope.projectsParams.pageSize;
                    }, function error(err) {
                        console.log(err);
                    });
            };

            $scope.getAllProjects();
    }])
    .controller('ViewProjectController', [
        '$scope',
        '$routeParams',
        'projects',
        function($scope, $routeParams, projects) {

            projects.showProject($routeParams.id)
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

                    projects.getIssues(data.Id)
                        .then(function success(issuesData) {
                            $scope.currentProjectIssues = issuesData;
                        }, function error(err) {

                        });
                }, function error(err) {

                });
    }])
    .controller('EditProjectController', [
        '$scope',
        '$routeParams',
        '$location',
        'projects',
        function($scope, $routeParams, $location, projects) {

            $scope.allUsers();

            function getArrayOfStrings(str) {
                return str.split(',');
            }

            projects.showProject($routeParams.id)
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
                }, function error(err) {

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

                    });
            };
    }])
    .controller('AddIssueToProjectController', [
        '$scope',
        '$routeParams',
        '$location',
        'projects',
        function($scope, $routeParams, $location, projects) {
            $scope.allUsers();

            projects.showProject($routeParams.id)
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
                    });
            };
    }])
    .controller('MyProjectsController', [
        '$scope',
        'projects',
        'PAGE_SIZE',
        function($scope, projects, pageSize) {
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

                    });
            };

            $scope.getMyProjects();
    }]);