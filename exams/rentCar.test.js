const { rentCar } = require("./rentCar");
const { assert } = require('chai');

describe('tests for rent a car obj', () => {
    describe('tests for searchCar method', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { rentCar.searchCar('some string', 1) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.searchCar([1, 2, 3], 1) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.searchCar('some string', 'some other string') }, Error, 'Invalid input')
        });

        it('should return the number of matching elements in the return message', () => {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Jeep', 'Toyota', 'Mercedes', 'BMW'], 'BMW'), `There is 2 car of model BMW in the catalog!`)
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Jeep', 'Toyota', 'Mercedes', 'Dodge'], 'BMW'), `There is 1 car of model BMW in the catalog!`)
        });

        it('should throw an error if there are no matching elements', () => {

            assert.throws(function () { rentCar.searchCar(["Volkswagen", "BMW", "Audi", 'Jeep', 'Toyota', 'Mercedes', 'BMW'], 'Dodge') }, Error, 'There are no such models in the catalog!')
        });


    });

    describe('tests for calculatePriceOfCar method', () => {
        it('should throw an error in case of invalid input', () => {

            assert.throws(function () { rentCar.calculatePriceOfCar([1, 2, 3], 1) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.calculatePriceOfCar('some string', 1.5) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.calculatePriceOfCar([1, 2, 3], 1.5) }, Error, 'Invalid input')
        });

        it('should return the correct model and price if the model is in the calatague', () => {
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 10), `You choose Mercedes and it will cost $500!`)
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 10), `You choose Volkswagen and it will cost $200!`)

        });

        it('should throw an error if there is no such model in the catalogue given as a parameter', () => {
            assert.throws(function () { rentCar.calculatePriceOfCar('Dodge', 20) }, Error, 'No such model in the catalog!');

        });



    });

    describe('tests for checkBudget method', () => {
        it('should throw an error in case of invalid input', () => {

            assert.throws(function () { rentCar.checkBudget([1, 2, 3], 1, 1.5) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.checkBudget('some string', 1.5, 4) }, Error, 'Invalid input')
            assert.throws(function () { rentCar.checkBudget([1, 2, 3], 5, 9) }, Error, 'Invalid input')
        });

        it('should return that we successfully rented a car if we have enough budget', () => {
            assert.equal(rentCar.checkBudget(10, 7, 70), `You rent a car!`)
            assert.equal(rentCar.checkBudget(10, 6, 70), `You rent a car!`)


        });

        it('should return that we need a bigger budget if it is not enough', () => {

            assert.equal(rentCar.checkBudget(10, 8, 70), 'You need a bigger budget!')

        });



    });






});