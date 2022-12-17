const { cinema } = require("./cinema");
const { assert } = require('chai');



describe('tests', () => {
    describe('showMovies method', () => {
        it('invalid input', () => {
            assert.equal(cinema.showMovies([]), `There are currently no movies to show.`)
            //  assert.equal(cinema.showMovies(undefined), `There are currently no movies to show.`)
            //  assert.equal(cinema.showMovies(null), `There are currently no movies to show.`)
            // assert.equal(cinema.showMovies(''), `There are currently no movies to show.`)

        });
        it('valid input', () => {
            assert.equal(cinema.showMovies(['test', 'test', 'test']), `test, test, test`)
       //       assert.equal(cinema.showMovies(['test']), `test`)

        });


    });


    describe('ticketPrice method', () => {
        it('invalid input', () => {
            assert.throws(function () { cinema.ticketPrice('test') }, Error, 'Invalid projection type.');

        });

        it('valid input', () => {
            assert.equal(cinema.ticketPrice('Premiere'), '12.00')
            assert.equal(cinema.ticketPrice('Normal'), '7.50')
            assert.equal(cinema.ticketPrice('Discount'), '5.50')

        });
    });


    /*
 if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace)
    */
    describe('swapSeatsInHall method', () => {
        it('invalid input', () => {
            assert.equal(cinema.swapSeatsInHall(5.50, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(-5, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(21, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 5.50), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 0), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, -2), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 21), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.")
           

            assert.equal(cinema.swapSeatsInHall(undefined, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, undefined), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(null, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, null), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall([], 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, []), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, 'str'), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall('str', 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, ''), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall('', 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall({}, 5), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(5, {}), "Unsuccessful change of seats in the hall.")

            
            
            
            
        });
        
        it('valid input', () => {
            assert.equal(cinema.swapSeatsInHall(2, 3), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(19, 20), "Successful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(20, 19), "Successful change of seats in the hall.")



        });

    });



});