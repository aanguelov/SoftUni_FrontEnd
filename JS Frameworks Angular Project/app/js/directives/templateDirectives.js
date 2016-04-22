angular.module('issueTracker.directives.filters', [])
    .directive('ngHeader', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/header.html'
        }
    }])
    .directive('ngFooter', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/footer.html'
        }
    }])
    .directive('ngIssueFilter', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/issues/issueFilter.html'
        }
    }]);