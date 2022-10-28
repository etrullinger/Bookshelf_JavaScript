/** Separate js file for Bookshelf class 
which maintains arrays of books */
class Bookshelf {
    constructor() {
        this.books = [];
        /** array of favorite books */
        this.favoriteBooks = [];
    }

    /** addBook function pushes a book into the 
    array of books and returns the array */
    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    /** addFavoriteBook function pushes a selected book 
    into the array of favorite books and returns the array */
    addFavoriteBook(book) {
        this.favoriteBooks.push(book);
        return this.favoriteBooks;
    }

    /** removeFavoriteBook function iterates over array of favorite books
    and removes book with same title as the selected book and returns the revised array */
    removeFavoriteBook(book) {
        for (let i = 0; i < this.favoriteBooks.length; i++) {
            if (this.favoriteBooks[i].title === book.title) {
                this.favoriteBooks.splice(i, i+1);
            }
        }
        return this.favoriteBooks;
    }

    /** countFavorites function uses reduce method to count and return the number of favorite books */
    countFavorites() {
        const reduceFn = (acc) => acc + 1;
        return this.favoriteBooks.reduce(reduceFn, 0);
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

        /** DOM element created to display total number of favorite books */
        const numFavorites = document.createElement('section');
        numFavorites.className = 'numFavorites';
        numFavorites.textContent = '0 Favorites';

        const bookList = document.createElement('ul');
        
        /** refactored so map is used to generate DOM elements from array of books */
        this.books.map(book => {
            bookList.append(book.render())
        })
    
        main.replaceChildren(numFavorites, bookList);
    }
}