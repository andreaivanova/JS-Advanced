function extract(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    const output = [];
    arr.forEach(x => {
        if (x > max) {
            max = x;
            output.push(max);
            return output;
        }
        return output;
    }
    )
    return output;

}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
extract([1,
    2,
    3,
    4]
);
extract([20,
    3,
    2,
    15,
    6,
    1]
);