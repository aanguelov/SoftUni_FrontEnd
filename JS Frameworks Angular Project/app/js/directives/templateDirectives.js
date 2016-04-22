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
    }])
    .directive('ngIssueCommentForm', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/issues/issue-comment-form.html'
        }
    }])
    .directive('ngIssueComments', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/issues/issue-comments.html'
        }
    }])
    .directive('ngDashboard', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/dashboard.html'
        }
    }])
    .directive('ngLoginUserForm', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/login.html'
        }
    }])
    .directive('ngRegisterUserForm', [function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/register.html'
        }
    }]);