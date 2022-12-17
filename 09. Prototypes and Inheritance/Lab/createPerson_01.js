function createPerson(firstName, lastName) {
 
    const person = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + lastName,
    }
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first !== undefined && last !== undefined){
                this.firstName = first;
                this.lastName = last;
            }
        }
    })
 
 
    return person;
 
}
 // ако в getter-a нямаме this, когато се опитаме да сменим стойността на firstName и lastName, тя няма да се промени, защото аргументите на функцията не се променят и getter-a ще чете от там, а ни трябва да четем от обекта и чрез this това става възможно; this ни дава референция към обекта и getter-a ще чете от него 
 
/*
let person = createPerson("Peter", "Ivanov");
 
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
console.log(person.fullName);
*/
 
 
 
 
let person = createPerson("Albert", "Simpson");
 
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson