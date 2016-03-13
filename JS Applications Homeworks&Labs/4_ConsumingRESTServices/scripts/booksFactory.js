var app = app || {};

(function (scope) {
    var allBooks = [];

    function createBook(title, author, isbn) {
        var book = new scope.book(title, author, isbn);
        allBooks.push(book);

        return book;
    }

    scope.allBooks = allBooks;
    scope.createBook = createBook;
})(app);