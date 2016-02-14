var imdb = imdb || {};

(function(scope) {
    function Actor(name, bio, born) {
        this.name = name;
        this.bio = bio;
        this.born = born;
    }

    scope.getActor = function getActor(name, bio, born) {
        return new Actor(name, bio, born);
    }
})(imdb);