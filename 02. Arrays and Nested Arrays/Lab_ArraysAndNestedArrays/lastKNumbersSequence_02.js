function sequence(n, k) {
    let arr = [1];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        let lastElements = arr.slice(-k);
        sum = lastElements.reduce((x, y) => x + y);

        arr.push(sum);
    }
    return arr;

}
console.log(sequence(6, 3));
sequence(8, 2);