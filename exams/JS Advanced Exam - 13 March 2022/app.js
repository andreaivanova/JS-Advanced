function solve() {
    //getting the input data
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let arr = [recipient, title, message];

    //getting reference to the buttons in the initial form and adding event listeners to them
    let btnAdd = document.getElementById('add');
    let btnReset = document.getElementById('reset');
    btnAdd.addEventListener('click', onAdd);
    btnReset.addEventListener('click', onReset);

    function onAdd(event) {
        //validating the input data
        event.preventDefault();
        if (recipient.value.length > 0 && title.value.length > 0 && message.value.length > 0) {

            //adding the input data to the 'list of emails' section (the ul element)
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            ul.appendChild(li);
            li.appendChild(createElements('h4', 1));
            li.appendChild(createElements('h4', 2));
            li.appendChild(createElements('span'));
            li.appendChild(createElements('div'));


            //clearing the input fields
            for (let i = 0; i < arr.length; i++) {
                arr[i].value = '';
            }

            //getting reference to the buttons inside the div and adding event listeners to all of them

            let btnSend = Array.from(document.querySelectorAll('button[id="send"]'));
            let btnDelete = Array.from(document.querySelectorAll('button[id="delete"]'));


            btnSend.forEach(x => x.addEventListener('click', onSend));
            btnDelete.forEach(x => x.addEventListener('click', onDelete));
        }

        //function to help the creation of elements
        function createElements(str, num) {
            let child;
            if (str === 'h4') {
                child = document.createElement('h4');
                if (num === 1) {
                    child.textContent = 'Title: ' + title.value;
                } else if (num === 2) {
                    child.textContent = 'Recipient Name: ' + recipient.value;
                }

            } else if (str === 'span') {
                child = document.createElement('span');
                child.textContent = message.value;
            } else if (str === 'div') {
                child = document.createElement('div');
                child.setAttribute('id', 'list-action');
                child.innerHTML = `<button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>`
            }

            return child;
        }
    }

    function onReset(event) {
        event.preventDefault();
        for (let i = 0; i < arr.length; i++) {
            arr[i].value = '';
        }

    }

    function onSend(event) {
        //adding the email data to the section of sent emails and removing it from the 'list of emails' section
        let li = event.target.parentElement.parentElement;
        li.remove();
        let ulSendList = document.getElementsByClassName('sent-list')[0];
        //refactoring the li tag
        ulSendList.appendChild(li)
        let children = Array.from(li.children);
        let email = children[1].textContent.split(': ')[1];
        let title = children[0].textContent;

        li.innerHTML = `<span>To: ${email}</span>
     <span>${title}</span>
     <div class="btn">
     <button type="submit" class="delete">Delete</button>
     </div>`
        //adding event listener to the delete btn
        let btnDelete = Array.from(document.getElementsByClassName('delete'));

        btnDelete.forEach(x => x.addEventListener('click', onDelete))

    }
    function onDelete(event) {
        // console.log(event.target);
        //removing the email data either from the list of emails section or from the sent emails section and sending it to the deleted emails
        let li = event.target.parentElement.parentElement;
        li.remove();
        let children = Array.from(li.children);
        let email = children[1].textContent.split(': ')[1];
        let title = children[0].textContent;
        li.innerHTML = `<span>To: ${email}</span>
     <span>${title}</span>`
        let ulDeleted = document.getElementsByClassName('delete-list')[0];
        ulDeleted.appendChild(li)
    }
}
solve()