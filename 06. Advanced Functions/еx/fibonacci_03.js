function getFibonator() {
    let arr = [0];

    return function fib() {
        let result;
        if (arr.length === 1){
            result = 1
            arr.push(result);
        } else {
            result = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(result);

        }
        return result;
    };

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
