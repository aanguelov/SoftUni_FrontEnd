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
    }]);