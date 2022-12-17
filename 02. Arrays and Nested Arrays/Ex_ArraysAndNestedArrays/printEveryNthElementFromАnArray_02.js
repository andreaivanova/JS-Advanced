function print(arr, step) {
    const output = [];
    for (let i = 0; i < arr.length; i += step) {
        output.push(arr[i]);
    }
    return output;

}
print(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
print(['dsa',
    'asd',
    'test',
    'tset'],
    2

);
print(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);