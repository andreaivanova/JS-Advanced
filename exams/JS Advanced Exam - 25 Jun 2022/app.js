window.addEventListener("load", solve);

function solve() {
  //getting the input
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let productionYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let arr = [make, model, productionYear, fuelType, originalCost, sellingPrice];
  //let profit = document.getElementById('profit');
  // profit.textContent = 0;
  let btnPublish = document.getElementById('publish');
  btnPublish.addEventListener('click', onPublish)

  function onPublish(event) {
    event.preventDefault();
    //validating the input
    if (make.value.length === 0 || model.value.length === 0 || productionYear.value.length === 0 || fuelType.value.length === 0 || originalCost.value.length === 0 || sellingPrice.value.length === 0 || Number(originalCost.value) > Number(sellingPrice.value)) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].value = '';
      }
      return;
    }
    //adding the input to the 1st table
    //and visualizing  the table data in rows and columns
    let tableRow = document.createElement('tr');
    tableRow.classList.add('row');
    document.getElementById('table-body').appendChild(tableRow);
    tableRow.appendChild(createCell(make.value));
    tableRow.appendChild(createCell(model.value));
    tableRow.appendChild(createCell(productionYear.value));
    tableRow.appendChild(createCell(fuelType.value));
    tableRow.appendChild(createCell(originalCost.value));
    tableRow.appendChild(createCell(sellingPrice.value));
    //deleting the data from the initial input form
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = '';
    }


    //adding the two buttons "Edit" and "Sell" to the table row as a table cell 
    let cellForTheButtons = document.createElement('td');
    cellForTheButtons.innerHTML = `<button class="action-btn edit">Edit</button> <button class="action-btn sell">Sell</button>`
    tableRow.appendChild(cellForTheButtons);


    // adding event listeners to the buttons in the table
    let btnEdit = tableRow.children[tableRow.children.length - 1].children[0];
    let btnSell = tableRow.children[tableRow.children.length - 1].children[1];

    btnEdit.addEventListener('click', onEdit);
    btnSell.addEventListener('click', onSell);
  }
  function onEdit(event) {
    let rowElements = Array.from(event.target.parentElement.parentElement.children);
    //returning the data into the initial input form
    for (let i = 0; i < rowElements.length - 1; i++) {
      arr[i].value = rowElements[i].textContent;
    }
    //removing the data from the table
    document.getElementById('table-body').removeChild(event.target.parentElement.parentElement)

  }

  function onSell(event) {
    //adding the data  to the table with sold cars
    let elements = Array.from(event.target.parentElement.parentElement.children);
    // console.log(elements);

    let parentUl = document.getElementById('cars-list')
    let childLi = document.createElement('li')
    childLi.classList.add('each-list');
    let firstSpan = document.createElement('span');
    firstSpan.textContent = elements[0].textContent + ' ' + elements[1].textContent;
    childLi.appendChild(firstSpan);
    let secondSpan = document.createElement('span');
    secondSpan.textContent = elements[2].textContent;
    childLi.appendChild(secondSpan);

    let thirdSpan = document.createElement('span');
    thirdSpan.textContent = Number(elements[5].textContent) - Number(elements[4].textContent)
    childLi.appendChild(thirdSpan);


    parentUl.appendChild(childLi);
    //removing the data from the table
    document.getElementById('table-body').removeChild(event.target.parentElement.parentElement)


    let profit = document.getElementById('profit');
    let addition = Number(thirdSpan.textContent);
    let output = (Number(profit.textContent) + addition).toFixed(2);
    profit.textContent = output;


  }




  function createCell(str) {
    let cell = document.createElement('td');
    cell.textContent = str;
    return cell;
  }
}
