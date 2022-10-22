class Bookshelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    render() {
        const main = document.querySelector('main');
        const bookList = document.createElement('ul');
        for (let book of this.books) {
            const bookListElement = book.render();
            bookList.append(bookListElement);
        }
        main.replaceChildren(bookList);
        // for (let i = 0; i < this.books.length; i++) {
        //     const bookTitle = document.querySelector('h2');
        //     const bookAuthor = document.querySelector('h5');
        //     if (i%4 == 0.25) {
        //         books[i].style.backgroundColor = 'yellow';
        //         bookTitle.style.backgroundColor = 'yellow';
        //         bookAuthor.style.backgroundColor = 'yellow';
        //     }
        // }
    }
}