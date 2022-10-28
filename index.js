/** bookshelf is declared as a new instance of class Bookshelf */
const bookshelf = new Bookshelf();

/** importBooks function iterates over the array
of books in bookData and takes an instance of each
book and adds it to the instance of class Bookshelf
through the addBook function and returns the instance
of Bookshelf */
function importBooks() {
    for (let i = 0; i < bookData.length; i++) {
        const book = new Book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title);
        bookshelf.addBook(book);
    }
    return bookshelf;
}

/** Execute importBooks function and render the
the appropriate DOM elements */
importBooks();
bookshelf.render();

const favButtons = document.querySelectorAll('.favButton');

for (let i = 0; i < favButtons.length; i++) {
    favButtons[i].addEventListener('click', (event) => {
        if (favButtons[i].textContent === 'LIKE') {
            favButtons[i].textContent = 'UNLIKE';
            bookshelf.addFavoriteBook(bookshelf.books[i]);
            return bookshelf.books[i].favorite = true;
        }
        if (favButtons[i].textContent === 'UNLIKE') {
            favButtons[i].textContent = 'LIKE';
            bookshelf.removeFavoriteBook(bookshelf.books[i]);
            return bookshelf.books[i].favorite = false;
        }
    })
}

console.log(bookshelf.books);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);