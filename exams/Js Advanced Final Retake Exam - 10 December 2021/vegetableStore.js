class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.existingVegs = [];
    }

    loadingVegetables(vegetables) {
        for (let element of vegetables) {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if (!this.existingVegs.includes(type)) {

                this.availableProducts.push({ type, quantity, price });
                this.existingVegs.push(type);
            } else {
                let index = this.existingVegs.indexOf(type);
                this.availableProducts[index].quantity += quantity;
                if (price > this.availableProducts[index].price) {
                    this.availableProducts[index].price = price;
                }
            }
        }

        return `Successfully added ${this.existingVegs.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let el of selectedProducts) {
            let [type, quantity] = el.split(' ')
            quantity = Number(quantity);

            if (!this.existingVegs.includes(type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let index = this.existingVegs.indexOf(type);
            if (quantity > this.availableProducts[index].quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += quantity * this.availableProducts[index].price;
            this.availableProducts[index].quantity -= quantity;
            
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity){
        
        if (!this.existingVegs.includes(type)) {
            throw new Error(`${type} is not available in the store.`)
        }
        let index = this.existingVegs.indexOf(type);
        if(quantity>this.availableProducts[index].quantity){
            this.availableProducts[index].quantity=0;
            return `The entire quantity of the ${type} has been removed.`
        }
        this.availableProducts[index].quantity-=quantity;
        return `Some quantity of the ${type} has been removed.`

    }

    revision(){
        let output=``;
        this.availableProducts.sort((a,b)=>a.price - b.price);
        this.availableProducts.forEach(x=>output+=`\n${x.type}-${x.quantity}-$${x.price}`)
  
        return `Available vegetables:${output}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    }


}









// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));



//  let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
