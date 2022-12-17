class Circle {
    constructor(r) {
        this.r = r;

    }
    get _r() {
        return this.r;
    }

    set _r(num) {
        this.r = num;
    }
}
const circle = new Circle(10);
console.log(circle.r)