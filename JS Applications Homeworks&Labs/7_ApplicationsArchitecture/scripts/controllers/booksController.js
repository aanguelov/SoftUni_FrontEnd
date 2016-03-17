var app = app || {};

app.booksController = (function () {
    function BooksController(model, viewBag) {
        this._model = model;
        this._viewBag = viewBag;
    }

    BooksController.prototype.showBooks = function showBooks() {
        var _this = this;

        _this._model.getAllBooks()
            .then(function (books) {
                _this._viewBag.showBooks(books);
            })
    };

    BooksController.prototype.addBook = function addBook(data) {
        var _this = this,
            book = new app.bookInputModel(data.title, data.author, data.isbn),
            bookOutputModel = book.getBookInputModel();

        this._model.addNewBook(bookOutputModel)
            .then(function() {
                _this.showBooks();
            })
    };

    BooksController.prototype.getBook = function getBook(data) {
        var _this = this,
            id = data.id;

        this._model.getBookById(id)
            .then(function(book) {
                _this._viewBag.showBookInfo(book);
            })
    };

    BooksController.prototype.editBook = function editBook(data) {
        var _this = this,
            id = data.id,
            dataForEdit = data.data;

        this._model.updateBook(id, dataForEdit)
            .then(function() {
                _this.showBooks();
            })
    };

    BooksController.prototype.deleteBook = function deleteBook(data) {
        var _this = this,
            id = data.id;

        this._model.deleteBook(id)
            .then(function() {
                _this.showBooks();
            })
    };

    return {
        load: function (model, viewBag) {
            return new BooksController(model, viewBag)
        }
    }
})();