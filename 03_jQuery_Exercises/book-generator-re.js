(function() {
    let id = 1;
    return function createBook(selector, titleInp, authorInp, isbnInp) {

        let book = $(`<div id="book${id}" style="border: medium none;">`)
        let title = $(`<p class="title">${titleInp}</p>`);
        let author = $(`<p class="author">${authorInp}</p>`);
        let isbn = $(`<p class="isbn">${isbnInp}</p>`);
        let selBtn = $('<button>Select</button>').click(function () {
            $(this).parent().css('border', '2px solid blue');
        });
        let desBtn = $('<button>Deselect</button>').click(function () {

            $(this).parent().css('border', 'none');
        });

        id++;

        book.append(title);
        book.append(author);
        book.append(isbn);
        book.append(selBtn);
        book.append(desBtn);
        $(selector).append(book);
    }
})();