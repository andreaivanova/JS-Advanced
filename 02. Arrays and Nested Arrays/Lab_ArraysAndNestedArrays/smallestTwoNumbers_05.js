function smallestTwoNumbers(arr) {

    let min1 = Math.min(...arr);
    let indexOfMin1 = arr.indexOf(min1);
    arr.splice(indexOfMin1, 1);


    let min2 = Math.min(...arr);
    let indexOfMin2 = arr.indexOf(min2);
    arr.splice(indexOfMin2, 1);
    console.log(min1 + ' ' + min2);



}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);