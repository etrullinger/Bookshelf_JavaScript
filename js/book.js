/** Separate js file for Book class 
which keeps track of author, language, subject, and title*/
class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }

    /** render function which creates and returns an element for each book
    and also creates child elements to display the title and author
    for each book */
    render() {
        const book = document.createElement('li');
        
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = this.title;
        
        const bookAuthor = document.createElement('h5');
        /** backticks are used since authors in book-data 
        are enclosed in arrays*/
        bookAuthor.textContent = `${this.author}`;
        
        book.append(bookTitle);
        book.append(bookAuthor);
        
        return book;
    }
}