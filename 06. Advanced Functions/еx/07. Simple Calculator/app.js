function calculator() {
    let a;
    let b;
    let res;
    let obj = {
        init(selector1, selector2, resultSelector) {
            a = document.querySelector(selector1);
            b = document.querySelector(selector2);
            res = document.querySelector(resultSelector);
        },
        add() {
            res.value = Number(a.value) + Number(b.value);
         return  res.value;
        },
        subtract() {
            res.value= Number(a.value) - Number(b.value);

            return  res.value;
        },

    }
    return obj;
}




const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
calculate.add(); 
