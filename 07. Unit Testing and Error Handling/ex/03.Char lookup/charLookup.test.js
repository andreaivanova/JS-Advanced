const lookupChar = require("./charLookup");
const { assert } = require('chai');


// describe('', () => {
//     it('', () => {
        
//     });
// });



describe('lookup char unit tests', () => {
    it('return undefined if the first parameter is NOT a string', () => {
        assert.equal(lookupChar(5, 10), undefined);
    });

    it('return undefined if the second parameter is NOT an integer', () => {
        assert.equal(lookupChar('', 5.5), undefined);
        assert.equal(lookupChar('', 'string'), undefined);
        assert.equal(lookupChar('', []), undefined);
        assert.equal(lookupChar('', {}), undefined);
    });

    it('return Incorrect index if the value of the index is incorrect', () => {
        assert.equal(lookupChar('hi', 5), 'Incorrect index');
        assert.equal(lookupChar('hi', 2), 'Incorrect index');
        assert.equal(lookupChar('hello', -5), 'Incorrect index');
        assert.equal(lookupChar('', 0), 'Incorrect index');

    });

    it('should return the character at the specified index in the string', () => {
        assert.equal(lookupChar('hi', 1), 'i');
        assert.equal(lookupChar('andrea', 5), 'a');
        assert.equal(lookupChar('o', 0), 'o');

        
    });




});