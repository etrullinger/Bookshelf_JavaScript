const bookshelf = new Bookshelf(bookData);
function importBooks() {
    for (let i = 0; i < bookData.length; i++) {
        const book = new Book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title);
        bookshelf.addBook(book);
    }
    return bookshelf;
};

console.log(importBooks());
importBooks();
bookshelf.render();