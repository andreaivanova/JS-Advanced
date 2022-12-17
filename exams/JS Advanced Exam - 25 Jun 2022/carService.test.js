
const { carService } = require("./carService");
const { assert } = require('chai')




describe('tests for the car service obj', () => {
   describe('tests for the isItExpensive obj method', () => {
       it('should return the correct message if the parameter is equal to engine', () => {
           assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`)
       });
       it('should return the correct message if the parameter is equal to transmission', () => {
        assert.equal(carService.isItExpensive('Tramsmission'), `The issue with the car is more severe and it will cost more money`)
    });

    it('should return a message if the parameter is different from transmission and engine', () => {
        assert.equal(carService.isItExpensive('some string'), `The overall price will be a bit cheaper`)
    });

   });

//    describe('', () => {
//     it('', () => {
        
//     });
// });


// describe('', () => {
//     it('', () => {
        
//     });
// });

// describe('', () => {
//     it('', () => {
        
//     });
// });




});