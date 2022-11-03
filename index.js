/** bookshelf is declared as a new instance of class Bookshelf. */
const bookshelf = new Bookshelf();

/** importBooks function iterates over the array
of books in bookData and takes an instance of each
book and adds it to the instance of class Bookshelf
through the addBook function and returns the instance
of Bookshelf. */
function importBooks() {
    for (let i = 0; i < bookData.length; i++) {
        const book = new Book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title);
        bookshelf.addBook(book);
    }
    return bookshelf;
}

/** Execute importBooks function and render the
the appropriate DOM elements. */
importBooks();
bookshelf.render();

/** bookInfoEvent function adds mouseover, mouseout, and click triggers to display information
such as language, subjects, and comments on each book. */
function bookInfoEvent() {
    const bookTitleElements = document.querySelectorAll('h2');
    const bookInfoElements = document.querySelectorAll('.bookInfo');
    const bookElements = document.querySelectorAll('.bookDOM');
    for (let i = 0; i < bookTitleElements.length; i++) {
        bookTitleElements[i].addEventListener('mouseover', (event) => {
            bookTitleElements[i].style.cursor = 'pointer';
            bookElements[i].style.border = '3px solid black';
        })
        bookTitleElements[i].addEventListener('mouseout', (event) => {
            bookElements[i].style.border = '1px solid black';
        })
        bookTitleElements[i].addEventListener('click', (event) => {
            if (bookInfoElements[i].style.display === 'none') {
                bookInfoElements[i].style.display = 'flex';
                bookInfoElements[i].style.flexDirection = 'column';                
            } else {
                bookInfoElements[i].style.display = 'none';                
            }
        })
    }
}

/** Execute bookInfoEvent function to add event listeners to book DOMs with respect
to book info sections. */
bookInfoEvent();

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
                favButtons[i].style.backgroundColor = 'darkgoldenrod';
                bookshelf.addFavoriteBook(bookshelf.books[i]);
                const numFavorites = document.querySelector('#numFavorites');
                const count = bookshelf.countFavorites();
                numFavorites.textContent = `${count} LIKED`
                return bookshelf.books[i].favorite = true;
            }
            if (favButtons[i].textContent === 'UNLIKE') {
                favButtons[i].textContent = 'LIKE';
                favButtons[i].style.backgroundColor = 'gainsboro';
                bookshelf.removeFavoriteBook(bookshelf.books[i]);
                const numFavorites = document.querySelector('#numFavorites');
                const count = bookshelf.countFavorites();
                numFavorites.textContent = `${count} LIKED`
                return bookshelf.books[i].favorite = false;
            }
        })
    }
}

/** Execute favButtons function to add event listeners to buttons on imported books. */
favButtons();

const dropDownList = document.querySelector('#dropDownList');
/** showHide function displays drop down list when mouse cursor hovers over the div and
hides the drop down list when mouse cursor exits the div. */
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
mouse hovers over the div. */
showHide();

const sortBy = document.querySelector('#sortBy');
/** Event listeners are added to sortBy div to trigger display or removal of drop down list when
mouse cursor moves over the div or out of the div. */
sortBy.addEventListener('mouseover', showHide);
sortBy.addEventListener('mouseout', showHide);

const dropDownItems = document.querySelectorAll('.dropDownItem');
/** for loop used on drop down list items to add event listeners to items which trigger change in styling. */
for (let item of dropDownItems) {
    item.style.fontSize = '0.85em';
    item.addEventListener('mouseover', (event) => item.style.backgroundColor = 'whitesmoke');
    item.addEventListener('mouseout', (event) => item.style.backgroundColor = 'lightgray');
}

/** Event listeners are added to drop down list item divs which trigger a series of events once clicked on. 
Relevant sort method will be called and executed to sort array of books. The DOM elements for the sorted array 
will be rendered and displayed. favButtons function as well as the commentButtonEvent function will be called 
and executed to add the event listeners to respective buttons. */
const titleAscending = document.querySelector('#titleAscending');
titleAscending.addEventListener('click', (event) => {
    bookshelf.sortTitleAscending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
});

const titleDescending = document.querySelector('#titleDescending');
titleDescending.addEventListener('click', (event) => {
    bookshelf.sortTitleDescending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
})

const authorAscending = document.querySelector('#authorAscending');
authorAscending.addEventListener('click', (event) => {
    bookshelf.sortAuthorAscending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
})

const authorDescending = document.querySelector('#authorDescending');
authorDescending.addEventListener('click', (event) => {
    bookshelf.sortAuthorDescending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
})

const numTopicsAscending = document.querySelector('#numTopicsAscending');
numTopicsAscending.addEventListener('click', (event) => {
    bookshelf.sortNumTopicsAscending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
})

const numTopicsDescending = document.querySelector('#numTopicsDescending');
numTopicsDescending.addEventListener('click', (event) => {
    bookshelf.sortNumTopicsDescending();
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
    bookInfoEvent();
})

const titleInput = document.querySelector('#titleInput');
const authorLastNameInput = document.querySelector('#authorLastNameInput');
const authorFirstNameInput = document.querySelector('#authorFirstNameInput');
const subjectInput = document.querySelector('#subjectInput');
const languageInput = document.querySelector('#languageInput');
const addBookButton = document.querySelector('#addBookButton');

/** Event listener is added to Add Book button to add book submitted by user to the book of arrays.
DOM elements for the books are rendered again to account for the added book and the favorite button feature
is added as well. First letters of author first and last name are capitalized while the rest of the letters
are lower cased before book is rendered to maintain consistency for sorting purposes. Once added, the input values 
for all fields will return back to empty. Every input field must have at least one character in order for the book
to be submitted. */
addBookButton.addEventListener('click', (event) => {
    const addBookAlert = document.querySelector('#addBookAlert');
    const lastNameCapitalized = authorLastNameInput.value.charAt(0).toUpperCase() + authorLastNameInput.value.slice(1).toLowerCase();
    const firstNameCapitalized = authorFirstNameInput.value.charAt(0).toUpperCase() + authorFirstNameInput.value.slice(1).toLowerCase();
    const newBook = new Book([`${lastNameCapitalized}`, ' ' + `${firstNameCapitalized}`], `${languageInput.value}`, [`${subjectInput.value}`], `${titleInput.value}`);
    if (authorLastNameInput.value.length > 0 && authorFirstNameInput.value.length > 0 && languageInput.value.length > 0 && subjectInput.value.length > 0 && titleInput.value.length > 0) {
        bookshelf.addBook(newBook);
        addBookAlert.textContent = `${titleInput.value} added!`
    } else {
        addBookAlert.textContent = 'Please complete all fields.'
    }
    authorLastNameInput.value = '';
    authorFirstNameInput.value = '';
    languageInput.value = '';
    subjectInput.value = '';
    titleInput.value = '';
    bookshelf.renderSorted();
    favButtons();
    commentButtonEvent();
})

/** commentButtonEvent function adds event listeners to all comment buttons. 
Once button is clicked comment box and submit button appears. Styling of specific book element
is also altered to allow room for the comment box. Comment box is limited to 280 characters and 
must have at least 1 character inputted in order to submit. If same comment button is clicked again 
comment box and submit button disappears. removeCommentBox function is also added before other events 
are triggered so that only the target comment box will appear at a time. submitButtonEvent function is
called and executed to add event listener to the submit button. */
function commentButtonEvent() {
    const books = document.querySelectorAll('.bookDOM');
    const commentButtons = document.querySelectorAll('.commentButton');
    const commentBoxes = document.querySelectorAll('.commentBox');
    const submitButtons = document.querySelectorAll('.submitButton');
    for (let i = 0; i < commentButtons.length; i++) {
        commentButtons[i].addEventListener('click', (event) => {
            if (commentBoxes[i].style.display === 'none') {
                removeCommentBox();
                commentButtons[i].style.backgroundColor = 'darkgray';
                commentBoxes[i].style.display = 'flex';
                commentBoxes[i].style.marginTop = '1em';
                commentBoxes[i].rows = '4';
                commentBoxes[i].cols = '40';
                commentBoxes[i].maxLength = '280';
                commentBoxes[i].style.resize = 'horizontal';
                commentBoxes[i].placeholder = 'Comment here';
                submitButtons[i].style.display = 'flex';
                submitButtons[i].textContent = 'Submit';
                books[i].style.marginBottom = '6em';
                submitButtonEvent();
            } else {
                removeCommentBox();
            }
        })
    }
}

/** Execute commentButtonEvent function to add event listeners to comment buttons once rendered. */
commentButtonEvent();

/** removeCommentBox function sets all comment box displays as none, submit buttons as hidden, and sets
styling of book elements and comment buttons back to original styling. */
function removeCommentBox() {
    const books = document.querySelectorAll('.bookDOM');
    const commentButtons = document.querySelectorAll('.commentButton');
    const commentBoxes = document.querySelectorAll('.commentBox');
    const submitButtons = document.querySelectorAll('.submitButton');
    for (let i = 0; i < commentButtons.length; i++) {
        commentBoxes[i].style.display = 'none';
        submitButtons[i].style.display = 'none';
        books[i].style.marginBottom = '0';
        commentButtons[i].style.backgroundColor = 'gainsboro';
    }
}

/** submitButtonEvent function iterates over buttons and adds event listener to the button
that is displayed. User also can only submit if there is at least one character inputted in the 
comment box. Once button is clicked comment is pushed to the array of comments for that particular book
and comment box is reset to empty. Comment is also displayed to book info. */
function submitButtonEvent() {
    const commentBoxes = document.querySelectorAll('.commentBox');
    const submitButtons = document.querySelectorAll('.submitButton');
    const bookComments = document.querySelectorAll('.bookComment');
    for (let i = 0; i < submitButtons.length; i++) {
        submitButtons[i].addEventListener('click', (event) => {
            if (commentBoxes[i].style.display === 'flex' && commentBoxes[i].value.length > 0) {
                const comment = `${commentBoxes[i].value}`;
                commentBoxes[i].value = '';
                bookComments[i].textContent += ` "${comment}"`;
                return bookshelf.books[i].comment.push(`"${comment}"`);
            }
        })
    }
}

