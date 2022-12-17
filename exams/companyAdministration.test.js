const { companyAdministration } = require("./companyAdministration");
const { assert } = require('chai');


describe('tests for this task', () => {
    describe('tests for hiringEmployee method', () => {
        it('should throw an error in case of having an employee different from a programmer', () => {
            assert.throws(function () { companyAdministration.hiringEmployee('Andrea', 'Casino dealer', 5) }, Error, `We are not looking for workers for this position.`);
            assert.throws(function () { companyAdministration.hiringEmployee('Andrea', 'Waitress', 5) }, Error, `We are not looking for workers for this position.`);
        });


        it('should successfully hire the programmer if he has at least 3 years of experience', () => {
            assert.equal(companyAdministration.hiringEmployee('Andrea', 'Programmer', 3), `Andrea was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee('Andrea', 'Programmer', 4), `Andrea was successfully hired for the position Programmer.`);


        });

        it('should not approve the candidate because he lacks experience', () => {
            assert.equal(companyAdministration.hiringEmployee('Andrea', 'Programmer', 2), `Andrea is not approved for this position.`);

        });



    });

    describe('tests for calculateSalary method', () => {
        it('should throw an error if the input is not a num or is a negative num', () => {
            assert.throws(function () { companyAdministration.calculateSalary('some string') }, Error, `Invalid hours`);
            assert.throws(function () { companyAdministration.calculateSalary(-5) }, Error, `Invalid hours`);
        });

        it('should return the proper amount of the employee\'s salary', () => {
            assert.equal(companyAdministration.calculateSalary(50), 750);
            assert.equal(companyAdministration.calculateSalary(170), 3550);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
            assert.equal(companyAdministration.calculateSalary(0), 0);
        });




    });


    describe('tests for	firedEmployee method', () => {
        it('should throw an error in case of invalid input', () => {
            assert.throws(function () { companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], 'some string') }, Error, `Invalid input`);
            assert.throws(function () { companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], 10) }, Error, `Invalid input`);

            assert.throws(function () { companyAdministration.firedEmployee('some string', 5) }, Error, `Invalid input`);
            assert.throws(function () { companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], -5) }, Error, `Invalid input`);
            assert.throws(function () { companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], 1.5) }, Error, `Invalid input`);
            assert.throws(function () { companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], 4) }, Error, `Invalid input`);

        });

        it('should fire the employee on the given index', () => {
            assert.equal(companyAdministration.firedEmployee(['Andrea', 'Ivanka', 'Mariika', 'Borqnka'], 1), 'Andrea, Mariika, Borqnka');
            assert.equal(companyAdministration.firedEmployee(['Andrea'], 0), '');
        });




    });



});