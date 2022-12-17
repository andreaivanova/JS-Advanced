function area(x) {
    let type = typeof (x);
    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        console.log((Math.PI * Math.pow(x, 2)).toFixed(2));
    }

}
area(5);
area('name');