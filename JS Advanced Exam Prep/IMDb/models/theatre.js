var imdb = imdb || {};

(function(scope) {
    function Theatre(name, length, rating, country) {
        scope._ShowType.call(this, name, length, rating, country);
        this.isPuppet = false;
    }

    Theatre.extends(scope._ShowType);

    scope.getTheatre = function(name, length, rating, country) {
        return new Theatre(name, length, rating, country);
    }
})(imdb);