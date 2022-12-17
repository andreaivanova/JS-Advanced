function math(a, b, sign) {
    let res;

    if (sign === '+') {
        res = a + b;
    } else if (sign === '-') {
        res = a - b;
    } else if (sign === '*') {
        res = a * b;
    } else if (sign === '/') {
        res = a / b;
    } else if (sign === '%') {
        res = a % b;
    } else if (sign === '**') {
        res = a ** b;
    }
console.log(res);
}
math(5, 6, '+');
math(3, 0, '/');