class Bookshelf {
    constructor() {
        this.books = [];
    };

    addBook(book) {
        this.books.push(book);
        return this.books;
    };

    render() {
        const body = document.querySelector('body');
        const bookList = document.createElement('ul');
        for (let book of this.books) {
            const bookListElement = book.render();
            bookList.append(bookListElement);
        };
        body.replaceChildren(bookList);
    };
};