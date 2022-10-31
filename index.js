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

/** favButtons function adds event listeners to all favorite buttons */
function favButtons() {
    /** Return NodeList of all favorite buttons */
    const favButtons = document.querySelectorAll('.favButton');

    /** Iterate over NodeList of all favorite buttons to add event listener to every button where on click a series of events will be triggered. 
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
                numFavorites.textContent = `${count} favorites`
                return bookshelf.books[i].favorite = true;
            }
            if (favButtons[i].textContent === 'UNLIKE') {
                favButtons[i].textContent = 'LIKE';
                bookshelf.removeFavoriteBook(bookshelf.books[i]);
                const numFavorites = document.querySelector('.numFavorites');
                const count = bookshelf.countFavorites();
                numFavorites.textContent = `${count} favorites`
                return bookshelf.books[i].favorite = false;
            }
        })
    }
}

/** Execute favButtons function to add event listeners to buttons on imported books */
favButtons();

const dropDownList = document.querySelector('#dropDownList');
/** showHide function displays drop down list when mouse cursor hovers over the div and
hides the drop down list when mouse cursor exits the div */
function showHide() {
    if (dropDownList.style.display === 'none') {
        dropDownList.style.display = 'flex';
        dropDownList.style.flexDirection = 'column';
        dropDownList.style.width = '10em';
        dropDownList.style.paddingTop = '0.25em';
        dropDownList.style.borderRadius = '10%';
    } else {
        dropDownList.style.display = 'none';
    }
}

/** showHide function is executed when page is rendered to hide the drop down display until
mouse hovers over the div */
showHide();

const sortBy = document.querySelector('.sortBy');
/** Event listeners are added to sortBy div to trigger display or removal of drop down list when
mouse cursor moves over the div or out of the div */
sortBy.addEventListener('mouseover', showHide);
sortBy.addEventListener('mouseout', showHide);

const dropDownItems = document.querySelectorAll('.dropDownItem');
/** for loop used on drop down list items to add event listeners to items which trigger change in styling */
for (let item of dropDownItems) {
    item.style.fontSize = '0.85em';
    item.addEventListener('mouseover', (event) => item.style.backgroundColor = 'whitesmoke');
    item.addEventListener('mouseout', (event) => item.style.backgroundColor = 'lightgray');
}

/** Event listeners are added to drop down list item divs which trigger a series of events once clicked on. 
Relevant sort method will be called and executed to sort array of books. The DOM elements for the sorted array 
will be rendered and displayed. favButtons function will be called and executed to add the event listeners. */
const titleAscending = document.querySelector('#titleAscending');
titleAscending.addEventListener('click', (event) => {
    bookshelf.sortTitleAscending();
    bookshelf.renderSorted();
    favButtons();
});

const titleDescending = document.querySelector('#titleDescending');
titleDescending.addEventListener('click', (event) => {
    bookshelf.sortTitleDescending();
    bookshelf.renderSorted();
    favButtons();
})

const authorAscending = document.querySelector('#authorAscending');
authorAscending.addEventListener('click', (event) => {
    bookshelf.sortAuthorAscending();
    bookshelf.renderSorted();
    favButtons();
})

const authorDescending = document.querySelector('#authorDescending');
authorDescending.addEventListener('click', (event) => {
    bookshelf.sortAuthorDescending();
    bookshelf.renderSorted();
    favButtons();
})

const numTopicsAscending = document.querySelector('#numTopicsAscending');
numTopicsAscending.addEventListener('click', (event) => {
    bookshelf.sortNumTopicsAscending();
    bookshelf.renderSorted();
    favButtons();
})

const numTopicsDescending = document.querySelector('#numTopicsDescending');
numTopicsDescending.addEventListener('click', (event) => {
    bookshelf.sortNumTopicsDescending();
    bookshelf.renderSorted();
    favButtons();
})