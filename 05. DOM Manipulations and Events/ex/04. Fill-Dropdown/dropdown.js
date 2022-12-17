function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById('newItemValue').value;

    let newSelectItem = document.createElement('option');
    newSelectItem.textContent = text;
    newSelectItem.value = val;
    let menu = document.getElementById('menu');
    menu.appendChild(newSelectItem);
   
    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = '';
}