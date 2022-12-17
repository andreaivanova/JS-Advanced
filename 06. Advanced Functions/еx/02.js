function argumentInfo() {
    let data =  {};
    Array.from(arguments).forEach(x=>{
       let type = typeof x;
       console.log(`${type}: ${x}`);

       if (!data[type]){
           data[type] = 0
       }
       data[type]++;
    })
}


 argumentInfo('cat', 42, function () { console.log('Hello world!'); });
 //argumentInfo({ name: 'bob' }, 3.333, 9.999);