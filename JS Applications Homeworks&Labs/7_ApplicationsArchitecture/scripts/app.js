var app = app || {};

(function (scope) {
    scope.router = Sammy(function() {
        var requester = scope.requester.config('kid_-J7IZvMfyb', '3a25ff31c485451f818911499f25d053');
        var selector = $('#wrapper'),
            booksModel = scope.booksModel.load(requester),
            booksViewBag = scope.booksView.load(),
            booksController = scope.booksController.load(booksModel, booksViewBag);

        this.get('#/', function () {
            booksController.showBooks();
        });

        this.bind('add-book', function(e, data) {
            booksController.addBook(data);
        });

        this.bind('display-book-info', function(e, data) {
            booksController.getBook(data);
        });

        this.bind('edit-book', function(e, data) {
            booksController.editBook(data);
        });

        this.bind('delete-book', function(e, data) {
            booksController.deleteBook(data);
        });
    });

    scope.router.run('#/');
})(app);