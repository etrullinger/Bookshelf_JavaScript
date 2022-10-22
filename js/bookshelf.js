/** Separate js file for Bookshelf class 
which maintains array of books */
class Bookshelf {
    constructor() {
        this.books = [];
    }

    /** addBook function pushes a book into the 
    array of books and returns the array */
    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    /** This render function creates an element
    for the list of books and replaces children elements
    of the parent main element with the new element. 
    Function iterates over each book in the array and
    creates an element for each book which is rendered 
    from the render function under class Book 
    and appends it to the element created for list of books. */
    render() {
        const main = document.querySelector('main');
        const bookList = document.createElement('ul');
        for (let book of this.books) {
            const bookListElement = book.render();
            bookList.append(bookListElement);
        }
        main.replaceChildren(bookList);
    }
}