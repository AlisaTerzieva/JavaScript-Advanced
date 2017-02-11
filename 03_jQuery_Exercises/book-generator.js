function bookStore()
{
let bookId = 0;
    return function createBook(selector, title, author, isbn) {
        if (selector, title, author, isbn) {
            let book = $('<div></div>');
            let titleBook = $('<p></p>');
            let authorBook = $('<p></p>');
            let isbnBook = $('<p></p>');
            let btnSelect = $('<button></button>');
            let btnDeselect = $('<button></button>');

            titleBook.text(title);
            titleBook.addClass("title");
            authorBook.text(author);
            authorBook.addClass("author");
            isbnBook.text(String(isbn));
            isbnBook.addClass("isbn");
            btnSelect.text("Select");
            btnDeselect.text("Deselect");

            titleBook.appendTo(book);
            authorBook.appendTo(book);
            isbnBook.appendTo(book);
            btnSelect.appendTo(book);
            btnDeselect.appendTo(book);
            book.appendTo(`${selector}`);
            ++bookId;
            book.attr('id', `book${bookId}`);
            book.css('border', `medium none`);


            btnSelect.on("click", function () {
                book.css('border', '2px solid blue');
            });

            btnDeselect.on("click", function () {
                book.css('border', 'medium none');
            });
        }
    }
};