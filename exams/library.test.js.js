
const { assert } = require('chai');
const { library } = require('./library');

describe('tests', () => {
    describe('tests for calcPriceOfBook  method', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { library.calcPriceOfBook('some string', 12.2) }, Error, 'Invalid input')
            assert.throws(function () { library.calcPriceOfBook([1,2,3], 5) }, Error, 'Invalid input')
            assert.throws(function () { library.calcPriceOfBook('some string', 'some other string') }, Error, 'Invalid input')
            
        });

        it('right input', () => {
            assert.equal(library.calcPriceOfBook('Robinzon Kruzo', 1940), `Price of Robinzon Kruzo is 10.00`)
            assert.equal(library.calcPriceOfBook('The Godfather', 1990), `Price of The Godfather is 20.00`)
            assert.equal(library.calcPriceOfBook('The Godfather', 1980), `Price of The Godfather is 10.00`)
           
        });

 


     });

    describe('tests for findBook  method', () => {
        it('should throw an error', () => {

            assert.throws(function () { library.findBook([], 'Troy') }, Error, 'No books currently available')
           
        });

        it('correct input', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), 'We found the book you want.')
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"],'Snow'), `The book you are looking for is not here!`)

        });

    


     });

    describe('tests for arrangeTheBooks  method', () => {
        it('should throw an error in case of invalid input', () => {

            assert.throws(function () { library.arrangeTheBooks(5.5) }, Error, 'Invalid input')
            assert.throws(function () { library.arrangeTheBooks('str') }, Error, 'Invalid input')
            assert.throws(function () { library.arrangeTheBooks(-3) }, Error, 'Invalid input')
        });

        it('right input', () => {
            assert.equal(library.arrangeTheBooks(40), `Great job, the books are arranged.`)
            assert.equal(library.arrangeTheBooks(20), `Great job, the books are arranged.`)
            assert.equal(library.arrangeTheBooks(0), `Great job, the books are arranged.`)
            assert.equal(library.arrangeTheBooks(1000), `Insufficient space, more shelves need to be purchased.`)


        });



   });






});