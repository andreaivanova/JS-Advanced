function argumentInfo(...args) {
    let obj = { }
    for (const el of args) {
        let type = typeof (el);
        console.log(`${type}: ${el}`);
        if (!obj[type]){
            obj[type] = 0;
        }
        obj[type]++;
    }

    let entries = Object.entries(obj)
    entries.sort((a, b) => {
        if (b - a !== 0) {
            return b[1] - a[1];
        }

    }).forEach(
        x => {

            if (x[1] !== 0) {
                console.log(`${x[0]} = ${x[1]}`)

            }
        }
    );
}
// for (const key in obj) {
//     if (obj[key] !== 0) {
//         console.log(key, '=', obj[key]);
//     }
// }


 argumentInfo('cat', 42, function () { console.log('Hello world!'); });
// argumentInfo({ name: 'bob' }, 3.333, 9.999);

//argumentInfo(true, true, [1, 2, 3, 4, 5], [4, 5, 6, 7]);
//argumentInfo(null);
//argumentInfo(undefined);
// argumentInfo({ name: 'bob' }, 3.333, 9.999);
// argumentInfo({ name: 'bob' }, 3.333, 9.999);
// argumentInfo({ name: 'bob' }, 3.333, 9.999);
// argumentInfo({ name: 'bob' }, 3.333, 9.999);
// argumentInfo({ name: 'bob' }, 3.333, 9.999);
