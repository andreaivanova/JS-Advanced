function engineer(arr) {
    let obj = {};
    for (let el of arr) {
        let [car, model, quantity] = el.split(' | ');
        quantity = Number(quantity);
        if (!obj.hasOwnProperty(car)) {
            obj[car] = {};
            obj[car][model] = quantity;
        } else {
            if (obj[car].hasOwnProperty(model)){
            obj[car][model] += quantity;
                continue;
            }
            obj[car][model] = quantity;
        }


    }
    
    for (const key in obj) {
        console.log(key);
        for (const model in obj[key]) {
           console.log(`###${model} -> ${obj[key][model]}`);
        }
    }
//console.log(obj);
}
engineer(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);



//SAMPLE USAGE OF THE MAP OBJECT IN JAVASCRIPT:


// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', ['string',5]);

// console.log(map1.get('a'));
// // expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // expected output: 97

// console.log(map1.size);
// // expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // expected output: 2
// console.log(map1)