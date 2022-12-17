//const evenOrOdd = require('./evenOrOdd');
const { assert } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('even or odd tests', () => {
    //invalid input tests
    it('should return undefined if the parameter is a number', () => {
        assert.equal(isOddOrEven(5), undefined);
    });

    it('should return undefined if the parameter is an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });


    it('should return undefined if the parameter is an array', () => {
        assert.equal(isOddOrEven([1, 2, 3]), undefined);

    });
    it('should return undefined if the parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);

    });
    it('should return undefined if the parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);

    });
    //valid input tests
    it('should return even if the input\'s length is even', () => {
        assert.equal(isOddOrEven('hi'), 'even');

    });

    it('should return odd if the input\'s length is odd', () => {
        assert.equal(isOddOrEven('hello'), 'odd');

    });




});