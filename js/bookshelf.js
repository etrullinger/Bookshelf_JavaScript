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

    sortTitleAscending() {
        return this.books.sort((a, b) => {
            var titleA = a.title.toLowerCase();
            var titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });
    }

    sortTitleDescending() {
        return this.books.sort((a, b) => {
            var titleA = a.title.toLowerCase();
            var titleB = b.title.toLowerCase();
            if (titleA > titleB) {
                return -1;
            }
            if (titleA < titleB) {
                return 1;
            }
            return 0;
        });
    }

    sortAuthorAscending() {
        return this.books.sort((a, b) => {
            if (a.author < b.author) {
                return -1;
            }
            if (a.author > b.author) {
                return 1;
            }
            return 0;
        });
    }

    sortAuthorDescending() {
        return this.books.sort((a, b) => {
            if (a.author > b.author) {
                return -1;
            }
            if (a.author < b.author) {
                return 1;
            }
            return 0;
        });
    }

    sortNumTopicsAscending() {
        return this.books.sort((a, b) => {
            const reduceFn = (acc) => acc + 1;
            var numTopicsA = a.subject.reduce(reduceFn, 0);
            var numTopicsB = b.subject.reduce(reduceFn, 0);
            return numTopicsA - numTopicsB;
        })
    }

    sortNumTopicsDescending() {
        return this.books.sort((a, b) => {
            const reduceFn = (acc) => acc + 1;
            var numTopicsA = a.subject.reduce(reduceFn, 0);
            var numTopicsB = b.subject.reduce(reduceFn, 0);
            return numTopicsB - numTopicsA;
        })
    }

    /** This render function creates an element
    for the list of books and replaces children elements
    of the parent main element with the new element. 
    Function iterates over each book in the array and
    creates an element for each book which is rendered 
    from the render function under class Book 
    and appends it to the element created for list of books. */
    render() {
        const header = document.querySelector('header');
        
        /** DOM element created to display total number of favorite books */
        const numFavorites = document.createElement('div');
        numFavorites.className = 'numFavorites';
        numFavorites.textContent = '0 favorites';

        header.append(numFavorites);
        
        const main = document.querySelector('main');

        const bookList = document.createElement('ul');
        
        /** refactored so map is used to generate DOM elements from array of books */
        this.books.map(book => {
            bookList.append(book.render())
        })

        const sortDropDown = document.createElement('div');
        sortDropDown.className = 'sortDropDown';
        
        const sortBy = document.createElement('div');
        sortBy.className = 'sortBy';
        sortBy.textContent = 'SORT';

        const dropDownList = document.createElement('div');
        dropDownList.id = 'dropDownList';
        
        const titleAscending = document.createElement('div');
        titleAscending.id = 'titleAscending';
        titleAscending.className = 'dropDownItem';
        titleAscending.textContent = 'Title Ascending';
        
        const titleDescending = document.createElement('div');
        titleDescending.id = 'titleDescending';
        titleDescending.className = 'dropDownItem';
        titleDescending.textContent = 'Title Descending';
        
        const authorAscending = document.createElement('div');
        authorAscending.id = 'authorAscending';
        authorAscending.className = 'dropDownItem';
        authorAscending.textContent = 'Author Ascending';
        
        const authorDescending = document.createElement('div');
        authorDescending.id = 'authorDescending';
        authorDescending.className = 'dropDownItem';
        authorDescending.textContent = 'Author Descending';
        
        const numTopicsAscending = document.createElement('div');
        numTopicsAscending.id = 'numTopicsAscending';
        numTopicsAscending.className = 'dropDownItem';
        numTopicsAscending.textContent = 'Number of Topics Asc';
        
        const numTopicsDescending = document.createElement('div');
        numTopicsDescending.id = 'numTopicsDescending';
        numTopicsDescending.className = 'dropDownItem';
        numTopicsDescending.textContent = 'Number of Topics Desc';

        dropDownList.append(titleAscending);
        dropDownList.append(titleDescending);
        dropDownList.append(authorAscending);
        dropDownList.append(authorDescending);
        dropDownList.append(numTopicsAscending);
        dropDownList.append(numTopicsDescending);
        sortBy.append(dropDownList);
        sortDropDown.append(sortBy);
    
        main.replaceChildren(bookList, sortDropDown);
    }

    renderSorted() {
        const main = document.querySelector('main');
        const bookList = document.createElement('ul');
        this.books.map(book => {
            bookList.append(book.render())
        })

        const favButtons = document.querySelectorAll('.favButton');
        for (let i = 0; i < favButtons.length; i++) {
            if (this.books[i].favorite === true) {
                favButtons[i].textContent = 'UNLIKE';
            }
        }

        main.replaceChild(bookList, main.firstElementChild);
    }
}