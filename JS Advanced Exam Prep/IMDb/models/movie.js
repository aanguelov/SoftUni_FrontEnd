var imdb = imdb || {};

(function(scope) {
    function Movie(name, length, rating, country) {
        scope._ShowType.call(this, name, length, rating, country);
    }

    Movie.extends(scope._ShowType);

    scope.getMovie = function(name, length, rating, country) {
        return new Movie(name, length, rating, country);
    }
})(imdb);