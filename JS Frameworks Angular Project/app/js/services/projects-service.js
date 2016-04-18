'use strict';

angular.module('issueTracker.services.projects', [])
    .factory('projects', ['$http', '$q', 'BASE_URL', function($http, $q, baseUrl) {

        function getAllProjects() {
            var deferred = $q.defer(),
                projectsReq = {
                    method: 'GET',
                    url: baseUrl + 'projects',
                    headers: {
                        'Authorization': 'Bearer ' + JSON.parse(sessionStorage['currentUser']).access_token
                    }
                };

            $http(projectsReq)
                .then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function addProject(project) {
            var deferred = $q.defer();

            var labels = project.labels.split(',');
            var dataLabels = '';
            labels.forEach(function(l, index) {
                dataLabels += '&labels[' + index + '].Name=' + l.trim();
            });

            var priorities = project.priorities.split(',');
            var dataPriorities = '';
            priorities.forEach(function(p, index) {
                dataPriorities += '&priorities[' + index + '].Name=' + p.trim();
            });

            var data = 'Name=' + project.name +
                    '&Description=' + project.description +
                    '&ProjectKey=' + project.key +
                    dataLabels + dataPriorities +
                    '&LeadId=' + project.leadId;

            var req = {
                method: 'POST',
                url: baseUrl + 'projects',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage['currentUser']).access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            };

            $http(req)
                .then(function success(response) {
                    deferred.resolve(response);
                }, function error(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function showProject(projectId) {
            var deferred = $q.defer(),
                projectReq = {
                    method: 'GET',
                    url: baseUrl + 'projects/' + projectId,
                    headers: {
                        'Authorization': 'Bearer ' + JSON.parse(sessionStorage['currentUser']).access_token
                    }
                };

            $http(projectReq)
                .then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function getIssuesByProjectId(projectId) {
            var deferred = $q.defer(),
                issuesReq = {
                    method: 'GET',
                    url: baseUrl + 'projects/' + projectId + '/issues',
                    headers: {
                        'Authorization': 'Bearer ' + JSON.parse(sessionStorage['currentUser']).access_token
                    }
                };

            $http(issuesReq)
                .then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        return {
            getAllProjects: getAllProjects,
            addProject: addProject,
            showProject: showProject,
            getIssues: getIssuesByProjectId
        }
    }]);