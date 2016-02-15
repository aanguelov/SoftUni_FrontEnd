var imdb = imdb || {};

(function(scope) {
    var idCounter = 1;
    function Review(author, content, date) {
        this.author = author;
        this.content = content;
        this.date = date;
        this._id = idCounter++;
    }

    scope.getReview = function getReview(author, content, date) {
        return new Review(author, content, date);
    }
})(imdb);