const { flowerShop } = require("./flowerShop");
const { assert } = require("chai");

describe('tests', () => {
    describe('tests for calcPriceOfFlowers method', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { flowerShop.calcPriceOfFlowers([1, 2, 3], 5, 5) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.calcPriceOfFlowers('some string', 1.5, 5) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.calcPriceOfFlowers('some string', 5, 1.5) }, Error, 'Invalid input');
        });

        it('should return the correct result when the proper parameters are given', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('tulips',5,10),`You need $50.00 to buy tulips!`)
            assert.equal(flowerShop.calcPriceOfFlowers('roses',10,10),`You need $100.00 to buy roses!`);
        });

    });

    describe('tests for checkFlowersAvailable method', () => {
        it('should return that the flowers are available if they exist in the arr', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"]),`The Rose are available!`);
            assert.equal(flowerShop.checkFlowersAvailable('Tulip',["Rose", "Lily", "Orchid",'Tulip']),`The Tulip are available!`);
        });
        it('should return that we need to buy more flowers if they don\'t exist in the arr', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Tulip',["Rose", "Lily", "Orchid",]),`The Tulip are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable('Sunflower',["Rose", "Lily", "Orchid",]),`The Sunflower are sold! You need to purchase more!`);
            
        });
    

    });

    describe('tests for sellFlowers method', () => {
        it('should return an error in case of invalid input', () => {
            assert.throws(function () { flowerShop.sellFlowers('str', 5) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.sellFlowers([1,2,3], 5.5) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.sellFlowers([1,2,3], -5) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.sellFlowers([1,2,3], 3) }, Error, 'Invalid input');
            assert.throws(function () { flowerShop.sellFlowers([1,2,3], 4) }, Error, 'Invalid input');
            
        });

        it('should return a joined array if the input is valid', () => {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid","Sunflower"],3),'Rose / Lily / Orchid');
        });
    });
});