function validity(x1, y1, x2, y2) {
    const distance1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2)); //{x1, y1} to {0, 0}
    const text1 = `{${x1}, ${y1}} to {0, 0}`;
    if (Number.isInteger(distance1)){
        console.log(text1 + ' is valid');
    } else {
        console.log(text1 + ' is invalid');
    }

    const distance2 = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2)); // {x2, y2} to {0, 0} 

    const text2 = `{${x2}, ${y2}} to {0, 0}`;
    if (Number.isInteger(distance2)){
        console.log(text2 + ' is valid');
    } else {
        console.log(text2 + ' is invalid');
    }


    const distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); //{x1, y1} to {x2, y2}
    const text3 = `{${x1}, ${y1}} to {${x2}, ${y2}}`;
    if (Number.isInteger(distance3)){
        console.log(text3 + ' is valid');
    } else {
        console.log(text3 + ' is invalid');
    }





}
validity(3, 0, 0, 4);
console.log(`---`);
validity(2, 1, 1, 1);