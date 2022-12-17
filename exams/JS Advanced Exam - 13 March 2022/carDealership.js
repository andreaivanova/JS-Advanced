class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.cars = []
    }

    addCar(model, horsepower, price, mileage) {
        if (model.length > 0 && (Number.isInteger(horsepower) && horsepower >= 0) && price >= 0 && mileage >= 0) {
            this.availableCars.push({ model, horsepower, price, mileage });
            this.cars.push(model);
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        } else {
            throw new Error('Invalid input!');

        }


    }

    sellCar(model, desiredMileage) {
        if (!this.cars.includes(model)) {
            throw new Error(`${model} was not found!`)
        } else {
            let index = this.cars.indexOf(model);
             if (this.availableCars[index].mileage > desiredMileage) {
                let diff =this.availableCars[index].mileage - desiredMileage;

                if (diff <= 40000) {
                    this.availableCars[index].price -= this.availableCars[index].price * 0.05;
                } else if (diff > 40000) {
                    this.availableCars[index].price -= this.availableCars[index].price * 0.10;
                }
            }
            let carModel = this.availableCars[index].model;
            let horsepower = this.availableCars[index].horsepower;
            let soldPrice = this.availableCars[index].price;
            this.soldCars.push({ carModel, horsepower, soldPrice })
            this.availableCars.splice(index, 1);
            this.cars.splice(index, 1);
            this.totalIncome += soldPrice;
            return `${carModel} was sold for ${soldPrice.toFixed(2)}$`
        }
    }
    currentCar() {
        if (this.cars.length === 0) {
            return "There are no available cars";
        } else {
            let output = `-Available cars:`
            this.availableCars.forEach(x =>
                output += `\n---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`
            )
            return output;
        }

    }

    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.carModel.localeCompare(b.carModel));
        } else {

            throw new Error('Invalid criteria!')
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`
        this.soldCars.forEach(x =>
            output += `\n---${x.carModel} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`
        )
        return output;
    }

}


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));



// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 23000);
//  dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));



// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));

