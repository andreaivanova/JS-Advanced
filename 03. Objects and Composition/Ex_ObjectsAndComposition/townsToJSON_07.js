function towns(arr) {
    let output = [];

    arr.shift();

    arr.forEach(x => {
        x = x.split('|')
            .filter(x => x !== '')
            .map(x => x.trim());
        let obj = {}
        obj['Town'] = x[0];
        obj['Latitude'] = Number(Number(x[1]).toFixed(2));
        obj['Longitude'] = Number(Number(x[2]).toFixed(2));
        output.push(obj)

    }
    )
    console.log(JSON.stringify(output));
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
console.log('---');
towns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);