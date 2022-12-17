function magicMatrixes(matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {

        let sumColA = 0;
        let sumColB = 0;
        let sumRowA = matrix[i].reduce((x, y) => x + y);
        let sumRowB = matrix[i + 1].reduce((x, y) => x + y);
        if (sumRowA !== sumRowB) {
            console.log(false);
            return;
        }
        for (let j = 0; j < matrix.length; j++) {
            sumColA += matrix[i][j]

            sumColB += matrix[i + 1][j]
        }
        if (sumColA !== sumColB) {
            console.log(false);
            return;
        }

    }
    console.log(true);
}


magicMatrixes([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

magicMatrixes([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);


magicMatrixes([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);
 

