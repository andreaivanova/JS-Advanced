class Hex {
    constructor(value) {
        this.value = Number(value);

    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(num) {
        return new Hex (this.value + num);

    }

    minus(num) {

        return new Hex(this.value - num);
    }

    parse(str) {
        return parseInt(str, 16);
    }


}


let FF = new Hex(255);
console.log(FF.toString()); //0XFF
//console.log(FF.valueOf() + 1 == 256); //true
let a = new Hex(10);
let b = new Hex(5);
 console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
