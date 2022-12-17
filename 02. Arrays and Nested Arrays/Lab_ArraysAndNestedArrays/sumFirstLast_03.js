function sum(arr){
    let sum = Number(arr.shift()) + Number(arr.pop());
    return sum;

}
console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));