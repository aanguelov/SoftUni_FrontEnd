var app = app || {};

app.booksModel = (function () {
    function BooksModel(requester) {
        this.requester = requester;
        this.serviceUrl = this.requester.baseUrl + 'appdata/' + this.requester.appId + '/books';
    }

    BooksModel.prototype.getAllBooks = function getAllBooks() {
        return this.requester.get(this.serviceUrl)
    };

    BooksModel.prototype.addNewBook = function addNewBook(book) {
        return this.requester.post(this.serviceUrl, book)
    };

    BooksModel.prototype.updateBook = function updateBook(id, data) {
        var requestUrl = this.serviceUrl + '/' + id;
        return this.requester.put(requestUrl, data)
    };

    BooksModel.prototype.getBookById = function getBookById(id) {
        var requestUrl = this.serviceUrl + '/' + id;
        return this.requester.get(requestUrl);
    };

    BooksModel.prototype.deleteBook = function deleteBook(id) {
        var requestUrl = this.serviceUrl + '/' + id;
        return this.requester.delete(requestUrl);
    };

    return {
        load: function (requester) {
            return new BooksModel(requester)
        }
    }
})();