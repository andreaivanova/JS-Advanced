
const { carService } = require("./carService");
const { assert, expect } = require('chai')




describe('tests for the car service obj', () => {
    describe('tests for the isItExpensive obj method', () => {
        it('should return the correct message if the parameter is equal to engine', () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
        });
        it('should return the correct message if the parameter is equal to transmission', () => {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
        });

        it('should return a different message if the parameter is different from transmission and engine', () => {
            assert.equal(carService.isItExpensive('some string'), `The overall price will be a bit cheaper`)
        });

    });




    describe('tests for the discount obj method', () => {
        it('should return an error if the numberOfParts is not a number', () => {
            //  assert.throws(carService.discount('some string'), Error,'Invalid input')
            // expect(carService.discount('string')).to.throw('Invalid input')
            assert.throws(function () { carService.discount('some string') }, Error, 'Invalid input')
        });

        it('should return an error if the totalPrice is not a number', () => {
            // expect(carService.discount(undefined)).to.throw('Invalid input')

            assert.throws(function () { carService.discount('some string') }, Error, 'Invalid input')
        });


        it('should return that the person cannot apply for discount if it is smaller than or equal to 2', () => {
            assert.equal(carService.discount(1, 50), `You cannot apply a discount`);
            assert.equal(carService.discount(2, 50), `You cannot apply a discount`);
        });

        it('should return that the discount is applied if the input is valid', () => {
            assert.equal(carService.discount(5, 10), `Discount applied! You saved ${1.5}$`);
            assert.equal(carService.discount(7, 10), `Discount applied! You saved ${1.5}$`);
            assert.equal(carService.discount(8, 10), `Discount applied! You saved ${3}$`);

        });


    });



    describe('tests for the partsToBuy obj method', () => {
        it('should throw an error if the parameters are not arrays', () => {
            assert.throws(function () { carService.partsToBuy('some string', [1, 2, 3]) }, Error, 'Invalid input');

            assert.throws(function () { carService.discount([1, 2, 3], 'some string') }, Error, 'Invalid input');

            assert.throws(function () { carService.discount('some string1', 'some string2') }, Error, 'Invalid input');

        });

        it('should return 0 if the partsCatalog array is empty', () => {
            assert.equal(carService.partsToBuy([], [1, 2, 3]), 0);

        });

        it('should return the total price if the input is correct', () => {
            assert.equal(carService.partsToBuy([{ part: "maslo", price: 200 }, { part: "naklatki", price: 80 }, { part: 'klimatik', price: 50 }], ['maslo', 'klimatik']), 250);

        });

        // it('', () => {

        // });





    });







});