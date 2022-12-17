function heroicInventory(arr) {
    
    let output = [];
    for (let el of arr) {
        if(el !== ''){

            let obj = {};
            let [name, level, items] = el.split(' / ');
            level = Number(level);
            if(items){

                items = items.split(', ');
                
        }
       if(name){
        obj.name = name;
       }
       if(level){
        obj.level=level;
       }
       if(items){
        obj.items = items;
       }
       
            output.push(obj)
        }

    }
console.log(JSON.stringify(output));

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroicInventory(['']);

