function juice(arr) {
    const obj = {};
    const producedJuices = [];

    for (let el of arr) {
        let [juice, quantity] = el.split(" => ");
        quantity = Number(quantity);
        if (!obj.hasOwnProperty(juice)) {
            obj[juice] = quantity;
        } else {
            obj[juice] += quantity;
        }

        if (obj[juice] >= 1000) {
            let bottles = Math.trunc(obj[juice] / 1000);
            //let leftQuantity = obj[juice] % 1000;
            obj[juice] -= bottles * 1000;
            let flag = false;
            // if (producedJuices.includes(juice)){
            //     let index = producedJuices.indexOf(juice);
            //     producedJuices[index][1]+=bottles;
            // } else {

            //     producedJuices.push([juice, bottles]);
            // }
            producedJuices.forEach(x => {
                if (x[0] === juice) {
                    x[1] += bottles;
                    flag = true;
                }
            })

            if (!flag) {
                producedJuices.push([juice, bottles]);
            }


        }
    }
    producedJuices.forEach(x=>
        console.log(x[0], '=>', x[1]))
}
juice([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
]);

console.log("---");
juice([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
]);
