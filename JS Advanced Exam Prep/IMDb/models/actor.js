var imdb = imdb || {};

(function(scope) {
    var idCounter = 1;
    function Actor(name, bio, born) {
        this.name = name;
        this.bio = bio;
        this.born = born;
        this._id = idCounter++;
    }

    scope.getActor = function getActor(name, bio, born) {
        return new Actor(name, bio, born);
    }
})(imdb);