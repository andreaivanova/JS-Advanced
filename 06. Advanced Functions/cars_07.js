function solve(arr) {
    let obj = {

    }
    const objOfMethods = {

        create(name) {
            return obj[name] = [];
        },

        createInherits(name, parentName) {
            return obj[parentName] = Object.prototype(name)
        },
    

        set(name, text) {
            return obj[name].push(text);
        },

        print(name) {
            return console.log(obj[name].join(','))
        }


    }

    // arr.forEach(x=> {
    //     const [command, name, property, value]=x.split(' ');
    //   //  objOfMethods[]
    // })

    for (let element of arr) {

        if (element.includes('create')) {
            const [command, name] = element.split(' ');
            objOfMethods.create(name);
            //console.log(obj);

        } else if (element.includes('inherit')) {
            const [command, name, command2, parentName] = element.split(' ');
            objOfMethods.createInherits(name, parentName);
            //console.log(obj);



        } else if (element.includes('set')) {
            const [command, name, property, value] = element.split(' ');
            const joined = property + ':' + value;
            objOfMethods.set(name, joined);
           // console.log(obj);

        } else if (element.includes('print')) {
            const [command, name] = element.split(' ');
            objOfMethods.print(name); 
        }
    }


}
//Object.prototype()

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
     'print c1',
     'print c2'
]
)
// solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']
// )

