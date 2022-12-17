const mathEnforcer = require("./mathEnforcer");
const { assert } = require('chai');

describe('tests for math enforcer object', () => {
    describe('tests for the addFive method of the obj', () => {
        it('should return undefined is the param is not a num', () => {
            assert.equal(mathEnforcer.addFive('string'), undefined);
            assert.equal(mathEnforcer.addFive([1, 2, 3]), undefined);
        });
        //in the bracets, the first thing is  the function invoking and then tthe expected result from that invoke

        it('should return the correct result if the param is a num', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-10), -5);
          
            assert.closeTo(mathEnforcer.addFive(0.1), 5.1, 0.01);

        });
    });

    describe('tests for the subtractTen method of the obj', () => {
        it('should return undefined is the param is not a num', () => {
            assert.equal(mathEnforcer.subtractTen('string'), undefined);
            assert.equal(mathEnforcer.subtractTen([1, 2, 3]), undefined);
        });

        it('should return the correct result if the param is a num', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.closeTo(mathEnforcer.subtractTen(10.2), 0.1999999999999993, 0.01);


        });
    });

    describe('tests for the sum method of the obj', () => {
        it('should return undefined if any of the params is not a num', () => {
            assert.equal(mathEnforcer.sum('string', 10), undefined);
            assert.equal(mathEnforcer.sum(10, 'string'), undefined);
        });

        it('should return the correct answer if both params are nums', () => {
            assert.equal(mathEnforcer.sum(5, 10), 15);
            assert.equal(mathEnforcer.sum(-20, -10), -30);
            assert.closeTo(mathEnforcer.sum(0.2,0.1), 0.30000000000000004, 0.01);
           
        });
    });
});