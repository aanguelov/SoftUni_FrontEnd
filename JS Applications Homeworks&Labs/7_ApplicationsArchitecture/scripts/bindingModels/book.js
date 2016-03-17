var app = app || {};

(function (scope) {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    Book.prototype.getBookInputModel = function() {
        return {
            title: this.title,
            author: this.author,
            isbn: this.isbn
        }
    };

    scope.bookInputModel = Book;
})(app);