function equal(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            if (row !== matrix.length - 1) {

                if (matrix[row][col] === matrix[row + 1][col]) {
                    count++;
                }
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }

        }
    }
    return count;
}
console.log(equal([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));
console.log(equal([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(equal([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));


