function solve(arr) {
    let sum = arr.reduce((x, y) => x + y);
    console.log(sum);
    let invertedArr = arr.map(x => 1 / x);
    let invertedSum = invertedArr.reduce((x, y) => x + y);
    console.log(invertedSum);
    console.log(arr.join(''));

}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);
