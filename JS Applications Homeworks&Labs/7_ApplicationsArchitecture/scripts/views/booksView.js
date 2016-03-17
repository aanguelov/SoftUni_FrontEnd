var app = app || {};

app.booksView = (function () {
    function BooksView() {

    }

    BooksView.prototype.showBooks = function showBooks(data) {
        $.get('templates/booksTemplate.html', function(templ) {
            var rendered = Mustache.render(templ, {books:data});
            $('#wrapper').html(rendered);

            $('.collection-add').on('click', function() {
                var addBookDiv = $('<div>')
                    .addClass('add-book-form')
                    .append($('<h3>').text('Add book'))
                    .append($('<input>').attr('type', 'text').attr('placeholder', 'Book Title').attr('id', 'book-title'))
                    .append($('<input>').attr('placeholder', 'Book Author').attr('id', 'book-author'))
                    .append($('<input>').attr('placeholder', 'Book Isbn').attr('id', 'book-isbn'))
                    .append($('<button>').text('Add').on('click', function () {
                        var title = $('#book-title').val(),
                            author = $('#book-author').val(),
                            isbn = $('#book-isbn').val();

                        $.sammy(function () {
                            this.trigger('add-book', {title: title, author: author, isbn: isbn});
                        })
                    }));
                $(this).parent().empty().append(addBookDiv);
            });

            $('.collection-view').on('click', function() {
                var id = $(this).attr('data-id');

                $.sammy(function() {
                    this.trigger('display-book-info', {id: id});
                })
            });
        })
    };

    BooksView.prototype.showBookInfo = function showBookInfo(book) {
        $.get('templates/bookInfo.html', function(templ) {
            var rendered = Mustache.render(templ, book);
            $('#wrapper').html(rendered);

            $('.edit-button').on('click', function() {
                var id = $(this).attr('id');
                var titleChange = $('#' + id + 'titleChange').val(),
                    authorChange = $('#' + id + 'authorChange').val(),
                    isbnChange = $('#' + id + 'isbnChange').val();

                var json = {
                    id: id,
                    data: {
                        title: titleChange !== '' ? titleChange : $('#' + id + 'title').text(),
                        author: authorChange !== '' ? authorChange : $('#' + id + 'author').text(),
                        isbn: isbnChange !== '' ? isbnChange : $('#' + id + 'isbn').text()
                    }
                };

                $.sammy(function() {
                    this.trigger('edit-book', json);
                });
            });

            $('.delete-button').on('click', function() {
                var id = $(this).attr('id').split('-')[0];

                $.sammy(function() {
                    this.trigger('delete-book', {id:id});
                });
            })
        })
    };

    return {
        load: function() {
            return new BooksView();
        }
    }
})();