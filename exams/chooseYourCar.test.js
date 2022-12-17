const { chooseYourCar } = require("./chooseYourCar");
const { assert } = require('chai');



describe('tests', () => {
    describe('choosingType method', () => {
        it('invalid input', () => {

            assert.throws(function () { chooseYourCar.choosingType('str', 'str', 1899) }, Error, 'Invalid Year!')
            assert.throws(function () { chooseYourCar.choosingType('str', 'str', 2023) }, Error, 'Invalid Year!')
            assert.throws(function () { chooseYourCar.choosingType('str', 'str', 2022) }, Error, 'This type of car is not what you are looking for.')
            assert.throws(function () { chooseYourCar.choosingType('Hedgeback', 'str', 2022) }, Error, 'This type of car is not what you are looking for.')

        });
        it('valid input', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'pink', 2010), `This pink Sedan meets the requirements, that you have.`)
            assert.equal(chooseYourCar.choosingType('Sedan', 'pink', 2011), `This pink Sedan meets the requirements, that you have.`)
            assert.equal(chooseYourCar.choosingType('Sedan', 'pink', 2009), `This Sedan is too old for you, especially with that pink color.`)
            assert.equal(chooseYourCar.choosingType('Sedan', 'black', 2002), `This Sedan is too old for you, especially with that black color.`)
            //  assert.equal(chooseYourCar.choosingType('Sedan', 'str',2020), ``)
            //  assert.equal(chooseYourCar.choosingType('Sedan', 'str',2020), ``)
        });


    });


       describe('brandName method', () => {
        it('invalid input', () => {
            
            assert.throws(function () { chooseYourCar.brandName('str', 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName(undefined, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName(null, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName(5, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName({}, 5) }, Error, 'Invalid Information!')
          
            assert.throws(function () { chooseYourCar.brandName([1,2,3], 'str') }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], {}) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], null) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], undefined) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], [1,3,4]) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], []) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], -5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], -5.5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], 1.5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], 4) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([1,2,3], 3) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.brandName([], 0) }, Error, 'Invalid Information!')
            


            
        });
        it('valid input', () => {
            assert.equal(chooseYourCar.brandName(['test1','test2','test3'],2), `test1, test2`)
            assert.equal(chooseYourCar.brandName(['test1','test2','test3'],0), `test2, test3`)
            assert.equal(chooseYourCar.brandName(['test1','test2','test3'],1), `test1, test3`)
            assert.equal(chooseYourCar.brandName(['test1','test2','test3'],1), `test1, test3`)
        //    assert.equal(chooseYourCar.brandName([],0), ``)

     });


    });




   describe('carFuelConsumption method', () => {
        it('invalid', () => {
 
            assert.throws(function () { chooseYourCar.carFuelConsumption([], 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption('str', 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(0, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(-5, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(undefined, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(null, 5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption({}, 5) }, Error, 'Invalid Information!')
         


            assert.throws(function () { chooseYourCar.carFuelConsumption(5, []) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, 'str') }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, 0) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, -5) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, undefined) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, null) }, Error, 'Invalid Information!')
            assert.throws(function () { chooseYourCar.carFuelConsumption(5, {}) }, Error, 'Invalid Information!')
   
        });
        it('valid', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,5), `The car is efficient enough, it burns 5.00 liters/100 km.`)
            assert.equal(chooseYourCar.carFuelConsumption(100,7), `The car is efficient enough, it burns 7.00 liters/100 km.`)
            assert.equal(chooseYourCar.carFuelConsumption(100,50), `The car burns too much fuel - 50.00 liters!`)

         //   assert.equal(chooseYourCar.carFuelConsumption(100,5), `test1, test3`)
         //   assert.equal(chooseYourCar.carFuelConsumption(100,5), `test1, test3`)
           // assert.equal(chooseYourCar.carFuelConsumption(100,5), `test1, test3`)

     });


     });



});