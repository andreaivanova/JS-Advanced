function outerFunction(outerVar){
    const someText = 'this text is accessible to the inner function because of the closure'
    return function innerFunction(innerVar){
        console.log(someText);
        console.log(outerVar);
        console.log(innerVar);
       
    }


}

const myFunc = outerFunction('this is the outer function');
myFunc('this is the inner function')