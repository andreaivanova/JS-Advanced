window.addEventListener("load", solve);

function solve() {
  //getting the input 
  let count = 0;
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let btnPublish = document.getElementById('publish-btn');
  btnPublish.addEventListener('click', onPublish);
  let arr = [title, category, content];
  function onPublish(event) {
    //validating the input
    if (title.value.length !== 0  && category.value.length !== 0 && content.value.length !== 0) {
      //adding the data to the posts for review section
      let ul = document.getElementById('review-list');
      let li = document.createElement('li');
      li.classList.add('rpost');
      ul.appendChild(li);
      //creating the article, its children elements, appending it to the li tag
      let article = document.createElement('article');

      li.appendChild(article);

      article.appendChild(createElements('h4'));
      article.appendChild(createElements('p'));
      article.appendChild(createElements('p'));

      //adding the buttons to the li tag
      li.appendChild(createElements('button', 'action-btn edit'));
      li.appendChild(createElements('button', 'action-btn approve'));

      //deleting the initial input data:
      for (let i = 0; i < arr.length; i++) {
        arr[i].value = '';
      }


      //getting reference to the buttons and adding event listeners to all of them

      let btnsEdit = Array.from(document.getElementsByClassName('edit'));
      let btnsApprove = Array.from(document.getElementsByClassName('approve'));
      //console.log(btnsEdit);
      // console.log(btnsApprove);
      btnsEdit.forEach(x => x.addEventListener('click', onEdit));
      btnsApprove.forEach(x => x.addEventListener('click', onApprove));


    }




  }
  function createElements(element, btnClass) {
    let child;
    if (element === 'h4') {
      child = document.createElement('h4');
      child.textContent = title.value;
      // title.value = '';
    } else if (element === 'p') {
      child = document.createElement('p');
      if (count % 2 === 0) {
        child.textContent = 'Category: '+ category.value;
        //  category.value = '';
      } else {
        child.textContent = 'Content: ' + content.value;
        //  content.value = '';
      }
      count++;
    } else if (element === 'button') {
      child = document.createElement('button');
      if (btnClass.includes('edit')) {
        child.classList.add('action-btn');
        child.classList.add('edit');
        child.textContent = 'Edit';
      } else if (btnClass.includes('approve')) {
        child.classList.add('action-btn');
        child.classList.add('approve');
        child.textContent = 'Approve'
      }
    }
    return child;
  }


  function onEdit(event) {
    // console.log(event.target);
    //clearing the data from the posts for review section and putting it back to the initial input form

    let children = Array.from(event.target.parentElement.children[0].children)
    for (let i = 0; i < arr.length; i++) {
      if (i === 1 || i === 2){
        let str = children[i].textContent.split(':');
        
        str.shift();
         for (let i = 0; i < str.length; i++) {
          str[i]=str[i].trim();
         }
        str.join(' ')
        children[i].textContent = str;

      }
      arr[i].value = children[i].textContent;

    }
    let parentLi = event.target.parentElement;
    parentLi.remove();


  }
  function onApprove(event) {
    // console.log(event.target);
    let parentLi = event.target.parentElement;
    parentLi.remove();
    let publishedUl = document.getElementById('published-list');
    //let liChildren =...parentLi.children];
    let lastChild1 = parentLi.lastElementChild;
    lastChild1.remove();
    let lastChild2 = parentLi.lastElementChild;
    lastChild2.remove();


    publishedUl.appendChild(parentLi);

  }

  let btnClear = document.getElementById('clear-btn');
  btnClear.addEventListener('click', onClear);


  function onClear(event) {
    let children = Array.from(event.target.parentElement.querySelector('ul').children);
    for (const iterator of children) {
      iterator.remove();
    }
  }

}
