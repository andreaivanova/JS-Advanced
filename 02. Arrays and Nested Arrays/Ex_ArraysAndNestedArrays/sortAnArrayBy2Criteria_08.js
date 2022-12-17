function sort(arr) {
    arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
    )
    console.log(arr.join('\n'));


}
sort(['alpha',
    'beta',
    'gamma']
);
sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
sort(['test',
    'Deny',
    'omen',
    'Default']
);