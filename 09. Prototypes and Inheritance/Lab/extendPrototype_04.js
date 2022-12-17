function extend(myClass) {
    myClass.prototype.species = 'Human';
    myClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
 
 
 
}
 
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
extend(Person)
const p = new Person('andrea', 21, 'andrea@mail.bg')
console.log(p)