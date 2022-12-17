function solve(arr){
    let collection = [];
    const obj = {
        add(str){
            collection.push(str)
        },
        remove(str){
            while(collection.includes(str)){
                collection.splice(collection.indexOf(str), 1)
            }
        },
        print(){
            console.log(collection.join(','));
        }

    }
    for (let element of arr) {

        if (element.includes('add')){
            const [command, word] = element.split(' ')
            obj.add(word);
        } else if (element.includes('remove')){
            const [command, word] = element.split(' ')
            obj.remove(word)
        } else if(element.includes('print')){
            const [command, word] = element.split(' ')
            obj.print()
        }

    }



}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);