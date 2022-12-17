function cook(num, first, second, third, forth, fifth) {
    const arr = [first, second, third, forth, fifth];
    num = Number(num);
    for (const command of arr) {
        if (command === 'chop') {
            num /= 2;
        } else if (command === 'dice') {
            num = Math.sqrt(num);
        } else if (command === 'spice') {
            num++;
        } else if (command === 'bake') {
            num *= 3;
        } else if (command === 'fillet') {
            num -= num * 0.2;
        }

        console.log(num);
    }


}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');