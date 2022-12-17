//getting the input
let title = document.getElementById('post-title');
let category = document.getElementById('post-category');
let content = document.getElementById('post-content');
let btnPublish = document.getElementById('publish-btn');
let arr = [title, category, content];
btnPublish.addEventListener('click', onPublish);


function onPublish(event) {
  if (title.value.length === 0 || category.value.length === 0 || content.value.length === 0) {
    return;
  }

  //putting the data into the posts for review section
  let reviewList = document.getElementById('review-list');
  let li = document.createElement('li');
  li.classList.add('rpost');
  reviewList.appendChild(li);
  let article = document.createElement('article');
  li.appendChild(article);

  //  --appending the elements to the article
  let h4 = document.createElement('h4');
  h4.textContent = title.value;
  let p1 = document.createElement('p');
  p1.textContent = category.value;
  let p2 = document.createElement('p');
  p2.textContent = content.value;
  article.appendChild(h4);
  article.appendChild(p1);
  article.appendChild(p2);

  //  --adding the buttons to the li tag
  li.innerHTML += ' <button class="action-btn edit">Edit</button> <button class="action-btn approve">Approve</button>'


  //  --clearing the initial input fields
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = '';
  }

  //adding event listeners to the buttons
  let btnEdit = document.getElementsByClassName('action-btn edit')[0];
  let btnApprove = document.getElementsByClassName('action-btn approve')[0];
  // console.log(btnEdit);
  btnEdit.addEventListener('click', onEdit);
  btnApprove.addEventListener('click', onApprove);



  function onEdit(event) {
    // returning the data to the initial input fields
    arr[0].value = h4.textContent;
    arr[1].value = p1.textContent;
    arr[2].value = p2.textContent;
   // console.log(event.target);
   let array = [...event.target.parentElement.children[0].children];
   for (let i = 0; i < array; i++) {
    array[i].textContent='';
   }
  }
  function onApprove(event) {

  }



}