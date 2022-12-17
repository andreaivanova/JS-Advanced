function biggerHalf(arr) {
    arr = arr.sort((a, b) => a - b);
    let output = arr.slice(arr.length / 2);
    return output;


}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);