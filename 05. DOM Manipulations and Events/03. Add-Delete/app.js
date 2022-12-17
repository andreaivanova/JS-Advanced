function addItem() {
    let text = document.getElementById('newItemText').value;
    let newEl = document.createElement('li')
        newEl.textContent = text;
        let deleteLink = document.createElement('a');
        deleteLink.textContent= '[Delete]';
        deleteLink.href = '#' // compulsory!
        newEl.appendChild(deleteLink);
        deleteLink.addEventListener('click', deleteItem)
    document.getElementById('items').appendChild(newEl)
    document.getElementById('newItemText').value = '';
    function deleteItem(event){
        event.target.parentElement.remove();
    }
}