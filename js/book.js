/** Separate js file for Book class 
which keeps track of author, language, subject, and title*/
class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        /** to keep track of whether or not a Book instance is a Favorite */
        this.favorite = false;
    }

    /** render function which creates and returns an element for each book
    and also creates child elements to display the title and author
    for each book */
    render() {
        const book = document.createElement('li');
        book.className = 'bookDOM';
        
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = this.title;
        
        const bookAuthor = document.createElement('h5');
        /** backticks are used since authors in book-data 
        are enclosed in arrays*/
        bookAuthor.textContent = `${this.author}`;

        /** a button to favorite the book will be created for each book.
        The if else statement is incorporated for when DOM elements are
        recreated for sorted books.*/
        const bookFavButton = document.createElement('button');
        bookFavButton.className = 'favButton';
        if (this.favorite === false) {
            bookFavButton.textContent = 'LIKE';
        } else {
            bookFavButton.textContent = 'UNLIKE';
        }
        
        book.append(bookTitle);
        book.append(bookAuthor);
        book.append(bookFavButton);
        
        return book;
    }
}