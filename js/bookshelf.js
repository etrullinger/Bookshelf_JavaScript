/** Separate js file for Bookshelf class 
which maintains arrays of books */
class Bookshelf {
    constructor() {
        this.books = [];
        /** array of favorite books */
        this.favoriteBooks = [];
    }

    /** addBook method pushes a book into the 
    array of books and returns the array. */
    addBook(book) {
        this.books.push(book);
        return this.books;
    }

    /** addFavoriteBook method pushes a selected book 
    into the array of favorite books and returns the array. */
    addFavoriteBook(book) {
        this.favoriteBooks.push(book);
        return this.favoriteBooks;
    }

    /** removeFavoriteBook method iterates over array of favorite books
    and removes book with same title as the selected book and returns the revised array. */
    removeFavoriteBook(book) {
        for (let i = 0; i < this.favoriteBooks.length; i++) {
            if (this.favoriteBooks[i].title === book.title) {
                this.favoriteBooks.splice(i, 1);
            }
        }
        return this.favoriteBooks;
    }

    /** countFavorites method uses reduce method to count and return the number of favorite books. */
    countFavorites() {
        const reduceFn = (acc) => acc + 1;
        return this.favoriteBooks.reduce(reduceFn, 0);
    }
    
    /** sortTitleAscending method uses sort method to sort array of books by title 
    in ascending order and return the same array. */
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

    /** sortTitleDescending method uses sort method to sort array of books by title 
    in descending order and return the same array. */
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

    /** sortAuthorAscending method uses sort method to sort array of books by author 
    in ascending order and return the same array. */
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

    /** sortAuthorDescending method uses sort method to sort array of books by author 
    in descending order and return the same array. */
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

    /** sortNumTopicsAscending method uses sort method as well as reduce method to sort 
    array of books by number of topics in ascending order and return the same array */
    sortNumTopicsAscending() {
        return this.books.sort((a, b) => {
            const reduceFn = (acc) => acc + 1;
            var numTopicsA = a.subject.reduce(reduceFn, 0);
            var numTopicsB = b.subject.reduce(reduceFn, 0);
            return numTopicsA - numTopicsB;
        })
    }

    /** sortNumTopicsDescending method uses sort method as well as reduce method to sort 
    array of books by number of topics in descending order and return the same array */
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
        const bookList = document.querySelector('#bookList');
        
        /** refactored so map is used to generate DOM elements from array of books */
        this.books.map(book => {
            bookList.append(book.render());
            bookList.append(book.renderInfo());
        })

        /** DOM element to display total number of favorite books */
        const numFavorites = document.querySelector('#numFavorites');
        numFavorites.textContent = '0 LIKED';

        /** DOM elements created to display the sort by feature  with drop down list */
        const sortBy = document.querySelector('#sortBy');
        sortBy.textContent = 'Sort';

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
    }

    /** renderSorted function is used to render DOM elements for sorted array of books 
    and replace existing DOM elements for books with these new DOM elements */
    renderSorted() {
        const main = document.querySelector('main');
        const bookList = document.createElement('ul');
        bookList.id = 'bookList';
        this.books.map(book => {
            bookList.append(book.render());
            bookList.append(book.renderInfo());
        })

        main.replaceChild(bookList, main.firstElementChild);
    }
}