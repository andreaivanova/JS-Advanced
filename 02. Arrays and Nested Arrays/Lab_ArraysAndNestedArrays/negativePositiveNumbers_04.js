function negativePositiveNumbers(arr){
    let outputArr = [];
    for (const element of arr) {
        if (element < 0){
            outputArr.unshift(element)
        } else {
            outputArr.push(element);
        }
    }
console.log(outputArr.join('\n'));

}
negativePositiveNumbers([7, -2, 8, 9]);
console.log('----');
negativePositiveNumbers([3, -2, 0, -1]);