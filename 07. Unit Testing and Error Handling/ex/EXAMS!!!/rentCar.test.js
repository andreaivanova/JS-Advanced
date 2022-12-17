const { rentCar } = require("./rentCar");
const { assert } = require('chai');

describe('tests for rent a car obj', () => {
    describe('tests for searchCar method', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { rentCar.searchCar('some string', 1) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.searchCar([1,2,3], 1) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.searchCar('some string', 'some other string') }, Error, 'Invalid input')
        });
        // it('', () => {

        // });
        // it('', () => {

        // });


    });


    //    describe('', () => {
    //     it('', () => {

    //     });
    // });


    // describe('', () => {
    //     it('', () => {

    //     });
    // });




});