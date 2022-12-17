function add(num) {
    let sum = 0;


    
    
    
    function inner(number) {
        sum += number;
        return inner;
        
    } //recursive function which invokes itself
    inner.toString = () => {
        return sum;
    }
    
    return inner(num);
}
//add(1)
console.log(add(1)(6)(-3).toString());