class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    };

    render() {
        const book = document.createElement('li');

        const bookTitle = document.createElement('h2');
        bookTitle.innerText = this.title;
        
        const bookAuthor = document.createElement('h4');
        bookAuthor.innerText = ` by ${this.author}`;
        
        book.append(bookTitle);
        book.append(bookAuthor);
        
        return book;
    };
};