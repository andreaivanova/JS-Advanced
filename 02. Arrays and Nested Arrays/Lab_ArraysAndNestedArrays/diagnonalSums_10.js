function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum2 += matrix[i][(matrix.length - 1) - i];
        sum1 += matrix[i][i]
    }
    console.log(sum1, sum2);

    //     for(let j = matrix.length - 1; j >= 0; j--){

    //         sum2+=matrix[j][j];
    //     }
    //    // console.log(sum2);
}