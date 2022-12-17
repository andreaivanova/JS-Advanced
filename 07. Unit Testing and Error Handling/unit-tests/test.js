const {expect} = require('chai');
 
const { sum } = require('./sum');




describe ('Test Suite', () => {

    it ('works with positive integers', () => {
        // if (sum (3, 5) != 8){
        //     throw new Error ('did not work with 3 and 5');
        // }
        expect(sum(3, 5)).to.equal(8, 'did not work with 3 and 5');
    });
    it ('works with floating point numbers', () => {
        // if (sum (3.14, 2.71) != 5.85){
        //     throw new Error ('did not work with 3.14 and 2.71');
        // }
        expect(sum(3.1, 2.71)).to.equal(5.85, 'didn\'t work with floating point numbers')
    })
})