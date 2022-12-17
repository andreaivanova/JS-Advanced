function solve() {
  let input = document.getElementsByTagName('textarea')[0];
  //it is needed to parse the imput inside an other function, because at the beginning the variable arrOfItems is assigned to an empty string.


  let generateBtn = document.getElementsByTagName('button')[0];
  let buyBtn = document.getElementsByTagName('button')[1];
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
    let arrOfItems = JSON.parse(input.value);
    for (const obj of arrOfItems) {

      let row = document.createElement('tr');
      row.appendChild(createColumn('img', obj.img));
      row.appendChild(createColumn('p', obj.name));
      row.appendChild(createColumn('p', obj.price));
      row.appendChild(createColumn('p', obj.decFactor));
      document.getElementsByTagName('tbody')[0].appendChild(row);

      row.appendChild(createColumn('input'));;
    }



  }
  let boughtItems = [];
  let totalSum = 0;
  let averageFactor = 0;
  let count = 0;
  function buy(event){
    let checkedItems = [...document.querySelectorAll('input[type="checkbox"]')].filter(x=>x.checked)
    
    for (let checkBox of checkedItems) {
      let arr = [...checkBox.parentElement.parentElement.querySelectorAll('p')];
      
      boughtItems.push(arr[0].textContent);
      totalSum += Number(arr[1].textContent);
      averageFactor += Number(arr[2].textContent);
      count++;
    }


    document.getElementsByTagName('textarea')[1].value = `Bought furniture: ${boughtItems.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${averageFactor / count}`
  }

  function createColumn(tag, data) {
    let column = document.createElement('td');
    let newElement;
    if (tag === 'img') {
      newElement = document.createElement('img');
      newElement.src = data;
    } else if (tag === 'input') {
      newElement = document.createElement('input');
      newElement.type = 'checkbox'
    } else {
      newElement = document.createElement(tag);
      newElement.textContent = data;
    }
    column.appendChild(newElement);
    return column;
  }
}
