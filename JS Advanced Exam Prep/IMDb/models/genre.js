var imdb = imdb || {};

(function(scope) {
    var idCounter = 1;
    function Genre(name) {
        this.name = name;
        this._movies = [];
        this._id = idCounter++;
    }

    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie) {
        var index = this._movies.indexOf(movie);

        deleteByIndex(index);
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(id) {
        var i, index = -1;

        for (i in this._movies) {
            if (this._movies[i]._id === id) {
                index = i;
            }
        }

        deleteByIndex(index);
    };

    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    function deleteByIndex(index) {
        if (index !== -1) {
            this._movies.splice(index, 1);
        }else {
            console.error('Movie not present in collection!')
        }
    }

    scope.getGenre = function(name) {
        return new Genre(name);
    }
})(imdb);