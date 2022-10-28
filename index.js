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

/** Return NodeList of all favorite buttons */
const favButtons = document.querySelectorAll('.favButton');

/** Iterate over NodeList of all favorite buttons to add event listener with set of instructions to every button once clicked. 
If button is pressed to favorite a book, button's display changes to "UNLIKE" to provide option to remove book from favorites. 
The addFavoriteBook function is called to add book to array of favorite books. The countFavorites function is called to 
provide new count of favorite books and feeds to the DOM element to display new count. It also returns favorite value of book as true. 
Likewise if unlike button is clicked, display changes back to "LIKE", book is removed from array of favorite books, 
new count of favorites books is displayed, and favorite value is returned back to false. */
for (let i = 0; i < favButtons.length; i++) {
    favButtons[i].addEventListener('click', (event) => {
        if (favButtons[i].textContent === 'LIKE') {
            favButtons[i].textContent = 'UNLIKE';
            bookshelf.addFavoriteBook(bookshelf.books[i]);
            const numFavorites = document.querySelector('.numFavorites');
            const count = bookshelf.countFavorites();
            numFavorites.textContent = `${count} Favorites`
            return bookshelf.books[i].favorite = true;
        }
        if (favButtons[i].textContent === 'UNLIKE') {
            favButtons[i].textContent = 'LIKE';
            bookshelf.removeFavoriteBook(bookshelf.books[i]);
            const numFavorites = document.querySelector('.numFavorites');
            const count = bookshelf.countFavorites();
            numFavorites.textContent = `${count} Favorites`
            return bookshelf.books[i].favorite = false;
        }
    })
}

console.log(bookshelf.books);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);
console.log(bookshelf.favoriteBooks);