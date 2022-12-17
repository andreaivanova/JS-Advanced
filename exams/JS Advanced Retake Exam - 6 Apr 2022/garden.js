class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0,
        })
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`


    }

    ripenPlant(plantName, quantity) {

        let isFound = this.plants.find(el => el.plantName === plantName) //isFound is the object
        if (isFound === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        let isRipe = isFound.ripe;
        if (isRipe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity < 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        isFound.ripe = true;
        isFound.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }


    }

    harvestPlant(plantName) {
        let isFound = this.plants.find(el => el.plantName === plantName) //isFound is the object
        if (isFound === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let isRipe = isFound.ripe;
        if (isRipe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let index = this.plants.indexOf(isFound);
        this.plants.splice(index, 1);
        this.storage.push({ plantName: isFound.plantName, quantity: isFound.quantity })
        this.spaceAvailable += isFound.spaceRequired;
        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {
        let output = ``;
        let plants = [];
        output += `The garden has ${this.spaceAvailable} free space left.`
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        this.plants.forEach(x => plants.push(x.plantName));
        output += `\nPlants in the garden: ${plants.join(', ')}`
        if (this.storage.length === 0) {
            output += `\nPlants in storage: The storage is empty.`;
        } else {
            let outputArr = []
            this.storage.forEach(x=>
                {
                    let values = Object.values(x);
                    values[1] = `(${values[1]})`
                    values = values.join(' ');
                    outputArr.push(values);
                    return outputArr;
                })
            output += `\nPlants in storage: ${outputArr.join(', ')}`
        }
       // console.log(output);
       return output
    }

}
//input 1:
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));


// //input 2:

// const myGarden = new Garden(250)

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));


// //input 3:

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

//input 4:

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// //input 5:

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));


// //input 6:

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// //input 7:

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
