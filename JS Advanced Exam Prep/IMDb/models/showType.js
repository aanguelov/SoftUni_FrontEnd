var imdb = imdb || {};

(function(scope) {
    var idCounter = 1;

    // Base class for Movie and Theatre
    function ShowType(name, length, rating, country) {
        this.name = name;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._id = idCounter++;
        this._actors = [];
        this._reviews = [];
        return this;
    }

    ShowType.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    };

    ShowType.prototype.addReview = function addReview(review) {
        this._reviews.push(review);
    };

    ShowType.prototype.getActors = function getActors() {
        return this._actors;
    };

    ShowType.prototype.getReviews = function getReviews() {
        return this._reviews;
    };

    ShowType.prototype.deleteReview = function deleteReview(review) {
        var index = this._reviews.indexOf(review);

        deleteReviewByIndex(index);
    };

    ShowType.prototype.deleteReviewById = function deleteReviewById(id) {
        var index, i;

        for (i in this._reviews) {
            if (this._reviews[i]._id === id) {
                index = i;
            }
        }

        deleteReviewByIndex(index);
    };

    function deleteReviewByIndex(index) {
        if (index !== -1) {
            this._reviews.splice(index, 1);
        }else {
            throw new Error('No such review.');
        }
    }

    scope._ShowType = ShowType;
})(imdb);