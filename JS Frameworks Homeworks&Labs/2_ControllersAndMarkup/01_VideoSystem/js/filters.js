app.filter = ('filter', function() {
    return function (input, contition) {
        var result = input.filter(function(a) {
            return a.haveSubtiltes === contition;
        });

        return result;
    }
});
