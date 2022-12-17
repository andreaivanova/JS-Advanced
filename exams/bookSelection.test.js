const { bookSelection } = require('./bookSelection')
const { assert } = require('chai');

describe('tests for book selection problem', () => {
    describe('tests for IsGenreSuitable', () => {
        it('should return the proper return message if the age is under or equal to 12 and the genre is Thriller or Horror', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 11), `Books with Thriller genre are not suitable for kids at 11 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 11), `Books with Horror genre are not suitable for kids at 11 age`);

        });
        it('should return that the books are suitable if the age is different and the genre is different', () => {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 11), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Romance', 18), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Drama', 10), `Those books are suitable`);
        });


    });


    describe('tests of isItAffordable', () => {
        it('should return an error if the price and budget are not a number', () => {
            assert.throws(function () { bookSelection.isItAffordable('some string', 12) }, Error, 'Invalid input');
            assert.throws(function () { bookSelection.isItAffordable(12, 'some string') }, Error, 'Invalid input');
            assert.throws(function () { bookSelection.isItAffordable('one string', 'some string') }, Error, 'Invalid input');
        });


        it('should return that we dont have enough money if the res is  smaller than 0', () => {
            assert.equal(bookSelection.isItAffordable(100, 50), `You don't have enough money`);
            assert.equal(bookSelection.isItAffordable(60, 40), `You don't have enough money`);
        });

        it('should return that the book is bought if the res is greater than or equal to 0', () => {
            assert.equal(bookSelection.isItAffordable(50, 100), `Book bought. You have 50$ left`);
            assert.equal(bookSelection.isItAffordable(100, 100), `Book bought. You have 0$ left`);
        });


    });


    describe('tests for suitableTitles', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { bookSelection.suitableTitles('some string', 'other string') }, Error, 'Invalid input');
            assert.throws(function () { bookSelection.suitableTitles([1, 2, 3], 100) }, Error, 'Invalid input');
        });
        it('should return the changed array of book titles if the genre is equal to the wantedGenre', () => {

            assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Mr. Bean", genre: "Comedy" }], 'Comedy'), ['Mr. Bean']);

             assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Mr. Bean", genre: "Comedy" }, { title: "The Notebook", genre: "Romance" }, { title: "Gone Girl", genre: "Thriller" }], 'Thriller'), ['The Da Vinci Code', 'Gone Girl']);

             assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Mr. Bean", genre: "Comedy" }, { title: "The Notebook", genre: "Romance" }, { title: "Gone Girl", genre: "Thriller" }], 'Drama'), []);
        });

    });





});