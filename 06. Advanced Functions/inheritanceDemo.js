const parent = {
    name: 'Andrea',
    print(){
        console.log(this.name);
    }
}


const child = {
    name:'Valya',
    __proto__: parent,
}
child.print()