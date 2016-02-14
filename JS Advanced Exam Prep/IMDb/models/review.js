var imdb = imdb || {};

(function(scope) {
    function Review(author, content, date) {
        this.author = author;
        this.content = content;
        this.date = date;
    }

    scope.getReview = function getReview(author, content, date) {
        return new Review(author, content, date);
    }
})(imdb);