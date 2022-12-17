(month, year) => new Date(year, month, 0).getDate();
// let date = new Date(year, month).getDate();


// console.log(date);


days(1, 2012);
days(2, 2021);
const days = new Date(2001, 2, 0).getDate();
console.log(days);

sort((a, b) => a - b)