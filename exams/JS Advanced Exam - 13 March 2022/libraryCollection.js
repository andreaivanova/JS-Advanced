class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.collectedBooks = [];
        this.payedBooks = [];
        this.authors = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error("Not enough space in the collection.");
        } else {
            this.books.push({ bookName, bookAuthor, payed: false });
            this.collectedBooks.push(bookName);
            this.authors.push(bookAuthor);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        if (!this.collectedBooks.includes(bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        } else {
            let index = this.collectedBooks.indexOf(bookName);
            if (this.books[index].payed === true) {
                throw new Error(`${bookName} has already been paid.`)
            } else {
                this.books[index].payed = true;
                this.payedBooks.push(bookName);
                return `${bookName} has been successfully paid.`
            }
        }
    }

    removeBook(bookName) {
        if (!this.collectedBooks.includes(bookName)) {
            throw new Error('The book, you\'re looking for, is not found.')
        }

        if (!this.payedBooks.includes(bookName)) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(bookName);
        this.collectedBooks.splice(index, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(author) {
        let output = ``;
        if (!author) {
            output += `The book collection has ${this.capacity - this.collectedBooks.length} empty spots left.`
            this.books.sort((a, b) => a.bookName.localeCompare(b));
            this.books.forEach(x =>
                output += `\n${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`
            )
            return output;
        }
        if (!this.authors.includes(author)) {
            throw new Error(`${author} is not in the collection.`)
        }

        this.books = this.books.filter(x => x.bookAuthor === author);
        this.books.forEach(x => {
            if (output.length === 0) {

                output += `${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`
            } else {
                output += `\n${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`
            }
            return output;
        }
        )
        return output;
    }


}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));



// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));


// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));


// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics('Miguel de Cervantes'));

