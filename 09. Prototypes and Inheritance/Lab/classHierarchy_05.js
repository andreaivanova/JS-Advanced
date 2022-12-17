function solve() {
    class Figure {
        constructor(unit = 'cm') {
  
            this.unit = unit;
        };

        get area() {

        };


        changeUnits(str) {
            this.unit = str;
        };

        metricConversion(num) {
            if (this.unit === 'm') {
                return num /= 10
            };
            if (this.unit === 'mm') {
                return num *= 10
            };
            return num;
        };

        toString() {
            return `Figures units: ${this.unit}`
        }

    }

    class Circle extends Figure {
        constructor(radius, unit) {
            super(unit);
            this.radius = radius;

        }
        get area() {

            return Math.PI * this.metricConversion(this.radius) ** 2;
        }


        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.metricConversion(this.radius)}`
        }



    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit)

            this.width = width;
            this.height = height;

        }

        get area() {
            return this.metricConversion(this.width) * this.metricConversion(this.height);

        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.metricConversion(this.width)}, height: ${this.metricConversion(this.height)}`
        }


    }



    return {
        Figure,
        Circle,
        Rectangle,
    }
}
// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50



// console.log('````````````````');
// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// }
// solve()