function list(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    let n = 1;
    arr.forEach(x => {
        console.log(n + '.'+ x);
        n++;
    })

}
list(["John", "Bob", "Christina", "Ema"]);
