function filter(arr, criteria) {
    arr = JSON.parse(arr);

    const [property, value] = criteria.split('-');
    let counter = 0;
    for (const obj of arr) {
        sortByCriteria.call(obj)
        
    }
    function sortByCriteria() {
        if (this[property] === value || criteria === 'all') {
            const result = `${counter}. ${this.first_name} ${this.last_name} - ${this.email}`;
            ++counter;
            return console.log(result);
        }
        //we can image that 'this' is the object
        //with .call() we give the function reference
        // to the current object iterated in the for loop,
        //we change the 'this' from global to the current object

    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)

filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)