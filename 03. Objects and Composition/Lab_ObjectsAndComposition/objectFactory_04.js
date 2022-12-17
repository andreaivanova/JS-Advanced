function factory(lib, arr){
   //iterate through every order
   //-create obj
   //-copy template props
   //-


   let output = []
   for (let element of arr) {
       let obj = {};
       for (let name in element.template) {
           
           obj[name] = element.template.name;
       }
       for (let command of element.parts) {
      obj[command] = lib[command];
    }
    
    output.push(obj);
}
  return output;
}
//alternative solution: 
// function factory(lib, list){
//     return list.map(order => {
//         const obj = Object.assign({}, order.template);
//         for (let part of order.parts) {
//             obj[part]=lib[part];
//         }
//         return obj;
//     })
// }





const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
 console.log(products);
  