function solve() {
    let btnAdd = document.getElementById('add');

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('date');
    btnAdd.addEventListener('click', onAdd);

    let count = 0;
    

    function onAdd(event) {
        event.preventDefault(); //preventDefault() prevents the default browser behavior for a given element.
        if (task.value === '' || description.value === '' || dueDate.value === '') {
            return;

        }
        let div = document.getElementsByClassName('orange')[0].parentElement.parentElement.querySelectorAll('div')[1];
        //console.log(div); 
        //creating the article, appending it to the open section and creating its elements
        let article = document.createElement('article')
        div.appendChild(article);

        article.appendChild(createElementsInArtc('h3'));
        article.appendChild(createElementsInArtc('p'));
        article.appendChild(createElementsInArtc('p'));

        //creating the div and its buttons inside
        let childDiv = document.createElement('div');
        childDiv.classList.add('flex')
        let btnStart = document.createElement('button');
        let btnDelete = document.createElement('button');
        btnStart.classList.add('green')
        btnStart.textContent = 'Start';
        btnDelete.classList.add('red')
        btnDelete.textContent = 'Delete'
        childDiv.appendChild(btnStart);
        childDiv.appendChild(btnDelete);
        article.appendChild(childDiv);
        //console.log(article);

       btnStart.addEventListener('click', onStart);
        btnDelete.addEventListener('click', onDelete);


        function onStart (event) {
            let elInProgress = document.getElementById('in-progress');
            elInProgress.appendChild(article);
            childDiv.insertBefore(btnDelete, btnStart);
            btnStart.textContent = 'Finish';
            btnStart.classList.remove('green');
            btnStart.classList.add('orange');
            btnStart.addEventListener('click', onFinish);
             

            function onFinish(event) {
               // console.log('finished');
               let elComplete = document.getElementsByClassName('green')[0].parentElement.parentElement.querySelectorAll('div')[1];
               elComplete.appendChild(article);
               childDiv.remove();
              // article.remove(childDiv);
              //console.log(article);
            }

        }
        
        function onDelete (event) {
            article.innerHTML = '';
            article.remove();
        }
    }
    
    function createElementsInArtc(element) {
        let child;
        count++;
        if (element === 'h3') {
            child = document.createElement('h3');
            child.textContent = task.value;
            return child;
        } else if (element === 'p') {
            child = document.createElement('p');
            if (count % 3===0){

                child.textContent = 'Due Date: ' + dueDate.value;
            } else {
                child.textContent = 'Description: ' + description.value;
            }
            return child;
        }
    }
    
}

