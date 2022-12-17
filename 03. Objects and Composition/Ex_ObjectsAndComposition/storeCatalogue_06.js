function storeCatalogue(arr) {
    let obj = {};

    for (let el of arr) {
        let [product, price] = el.split(' : ');
        obj[product] = price;
    }

    let entries = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));
 
   // console.log(entries);
    let letter = '';
    for (let i = 0; i < entries.length; i++) {
       if(entries[i][0][0] !== letter){
        letter = entries[i][0][0];
        console.log(letter);
        console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
       } else {

           console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
       }
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);

// storeCatalogue_06