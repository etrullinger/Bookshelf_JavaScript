/** Separate js file for Book class 
which keeps track of author, language, subject, and title */
class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        /** To keep track of whether or not a Book instance is a Favorite. */
        this.favorite = false;
        /** Array of comments added to store submitted comments by users for each book. */
        this.comment = [];
    }

    /** render method creates and returns an element for each book
    and also creates child elements to display the title and author
    for each book. */
    render() {
        const book = document.createElement('li');
        book.className = 'bookDOM';
        
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = this.title;
        
        const bookAuthor = document.createElement('h5');
        /** Backticks are used since authors in book-data 
        are enclosed in arrays. */
        bookAuthor.textContent = `${this.author}`;

        /** A button to favorite the book will be created for each book.
        The if else statement is incorporated for when DOM elements are
        recreated for sorted books.*/
        const bookFavButton = document.createElement('button');
        bookFavButton.className = 'favButton';
        if (this.favorite === false) {
            bookFavButton.textContent = 'LIKE';
            bookFavButton.style.backgroundColor = 'gainsboro';
        } else {
            bookFavButton.textContent = 'UNLIKE';
            bookFavButton.style.backgroundColor = 'darkgoldenrod';
            bookFavButton.style.color = 'ghostwhite';
        }

        /** A button to comment the book will be created for each book. */
        const commentButton = document.createElement('button');
        commentButton.className = 'commentButton';
        commentButton.textContent = 'Comment';

        /** A book info section outlining stored data on comments, language, and subjects
        will be created. It will display when cursor hovers over the book list item. */
        const bookInfo = document.createElement('div');
        bookInfo.className = 'bookInfo';
        bookInfo.style.display = 'none';
        
        const bookLanguage = document.createElement('p');
        bookLanguage.className = 'bookLanguage';
        bookLanguage.textContent = `Language: ${this.language}`;
        
        const bookComment = document.createElement('p');
        bookComment.className = 'bookComment';
        const commentDisplay = `${this.comment}`.split(',').join(' ');
        bookComment.textContent = `Comments: ${commentDisplay}`;

        const bookSubject = document.createElement('p');
        bookSubject.className = 'bookSubject';
        const subjectDisplay = `${this.subject}`.split(',').join(', ');
        bookSubject.textContent = `Topics: ${subjectDisplay}`;

        bookInfo.append(bookLanguage);
        bookInfo.append(bookComment);
        bookInfo.append(bookSubject);

        /** A comment box will be created along with comment button but will be 
        hidden until user clicks the comment button. */
        const commentBox = document.createElement('textarea');
        commentBox.className = 'commentBox';
        commentBox.name = 'comment';
        commentBox.style.display = 'none';
        
        /** A submit button will be created along with the comment button and comment 
        box to allow user to submit comment and add it to Book. This will also be 
        hidden until user clicks comment button. */
        const submitButton = document.createElement('button');
        submitButton.className = 'submitButton';
        submitButton.style.display = 'none';
        
        book.append(bookTitle);
        book.append(bookAuthor);
        book.append(bookFavButton);
        book.append(commentButton);
        book.append(commentBox);
        book.append(submitButton);
        book.append(bookInfo);
        
        return book;
    }
}