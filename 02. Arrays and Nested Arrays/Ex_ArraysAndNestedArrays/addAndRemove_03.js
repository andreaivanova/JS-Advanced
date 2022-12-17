function addRemove(arr) {
    let n = 1;
    const output = [];

    for (const command of arr) {
        if (command === 'add') {
            output.push(n);

        } else if (command === 'remove') {
            output.pop();

        }

        n++;
    }

    if (output.length === 0){
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }
}
addRemove(['add',
    'add',
    'add',
    'add']
);
console.log(`---------`);
addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
console.log(`---------`);

addRemove(['remove',
    'remove',
    'remove']
);