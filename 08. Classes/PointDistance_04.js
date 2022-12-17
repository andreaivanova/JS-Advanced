class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        const a = Math.abs(point1.x - point2.x);
        const b = Math.abs(point1.y - point2.y);
        const result = Math.sqrt(a ** 2 + b ** 2);
        return result;
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(p1);
console.log(p2);
console.log(Point.distance(p1, p2));
