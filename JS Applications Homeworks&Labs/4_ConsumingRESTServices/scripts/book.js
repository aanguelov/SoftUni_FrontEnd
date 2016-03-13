var app = app || {};

(function (scope) {
    function Book(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    scope.book = Book;
})(app);