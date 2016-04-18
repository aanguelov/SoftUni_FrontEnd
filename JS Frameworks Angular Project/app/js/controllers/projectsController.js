'use strict';

angular.module('issueTracker.controllers.projects', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/projects', {
                templateUrl: 'partials/allProjects.html',
                controller: 'ProjectsController'
            })
            .when('/projects/add', {
                templateUrl: 'partials/addProject.html',
                controller: 'ProjectsController'
            })
            .when('/projects/:id', {
                templateUrl: 'partials/project-page.html',
                controller: 'ViewProjectController'
            })
    }])
    .controller('ProjectsController', ['$scope', 'projects', 'users', function($scope, projects, users) {

        $scope.addProject = function(project) {
            projects.addProject(project)
                .then(function success(data) {
                    console.log(data);
                }, function error(err) {
                    console.log(err);
                });
        };

        function getAllProjects() {
            projects.getAllProjects()
                .then(function success(result) {
                    $scope.allProjects = result
                }, function error(err) {
                    console.log(err);
                });
        }

        function getAllUsers() {
            users.getAllUsers()
                .then(function success(data) {
                    $scope.allUsers = data;
                });
        }

        getAllProjects();
        getAllUsers();
    }])
    .controller('ViewProjectController', ['$scope', '$routeParams', 'projects', function($scope, $routeParams, projects) {

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

                projects.getIssues(data.Id)
                    .then(function success(issuesData) {
                        console.log(issuesData);
                        $scope.currentProjectIssues = issuesData;
                    }, function error(err) {

                    });
            }, function error(err) {

            });
    }]);