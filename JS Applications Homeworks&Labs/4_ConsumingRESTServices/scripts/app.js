var app = app || {};

(function (scope) {
    scope.listAllBooks();
    $('#add-button').on('click', scope.addBook);
    $('#list-of-books').on('click', function(e) {
        scope.getBookInfo(e.target.textContent);
    });

})(app);