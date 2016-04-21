angular.module('issueTracker.directives.filters', [])
    .directive('ngHeader', [function() {
        return {
            restrict: 'A',
            templateUrl: 'partials/header.html'
        }
    }])
    .directive('ngFooter', [function() {
        return {
            restrict: 'A',
            templateUrl: 'partials/footer.html'
        }
    }])
    .directive('ngIssueFilter', [function() {
        return {
            restrict: 'A',
            templateUrl: 'partials/issues/issueFilter.html'
        }
    }]);