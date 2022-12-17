window.addEventListener("load", solve);

function solve() {
  //input
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let arr = [firstName, lastName, age, title, genre, story];
  //let arrValues=[firstName.value,lastName.value,age.value,title.value,genre.value,story.value];


  //let arrValues=[firstNameValue,lastNameValue,ageValue,titleValue,genreValue,storyValue];
  let previewSection = document.getElementById('preview-list');



  let btnPublish = document.getElementById('form-btn')
  btnPublish.addEventListener('click', onPublish)


  function onPublish(event) {

    if (arr.every(x => x.value.length > 0) && Number(age.value)>0) {

      //console.log(genre.value);

      //console.log(previewSection);
      previewSection.innerHTML += `
      <li class="story-info">
      <article>
          <h4>Name: ${firstName.value} ${lastName.value}</h4>
          <p>Age: ${age.value}</p>
          <p>Title: ${title.value}</p>
          <p>Genre: ${genre.value}</p>
          <p>${story.value}</p>
      </article>
      <button class="save-btn">Save Story</button>
      <button class="edit-btn">Edit Story</button>
      <button class="delete-btn">Delete Story</button>
  </li>

      `



      arr.map(x => x.value = '');
      btnPublish.disabled = true;

      let btnSave = document.getElementsByClassName('save-btn')[0];
      let btnEdit = document.getElementsByClassName('edit-btn')[0];
      let btnDelete = document.getElementsByClassName('delete-btn')[0];

            btnSave.addEventListener('click', onSave);
      btnEdit.addEventListener('click', onEdit);
       btnDelete.addEventListener('click', onDelete);


    }
  }


  function onEdit(event) {
    let myStory = document.getElementsByClassName('story-info')[0];
    myStory.remove();

    let article = Array.from(event.target.parentElement.querySelector('article').children);
    let names = article[0].textContent.split(': ');
    let [firstName, lastName] = names[1].split(' ')
    let age = article[1].textContent.split(': ')[1];
    let title = article[2].textContent.split(': ')[1];
    let genre = article[3].textContent.split(': ')[1];
    let story = article[4].textContent;

    let arrValues = [firstName, lastName, age, title, genre, story];
    for (let i = 0; i < arr.length; i++) {
      arr[i].value = arrValues[i]
    }

    btnPublish.disabled = false;





  }


  function onSave(event){
    let mainDiv=document.getElementById('main');
    mainDiv.innerHTML='';
    mainDiv.innerHTML+=`<h1>Your scary story is saved!</h1>`
  }


  function onDelete(event){
    let myStory = document.getElementsByClassName('story-info')[0];
    myStory.remove();
    btnPublish.disabled = false;

  }
}


// window.addEventListener("load", solve);

// function solve() {
//   let firstName = document.getElementById("first-name");
//   let lastName = document.getElementById("last-name");
//   let age = document.getElementById("age");
//   let storyTitle = document.getElementById("story-title");
//   let genre = document.getElementById("genre");
//   let story = document.getElementById("story");
//   let parent = document.getElementById('preview-list');

//   let publishButton = document.getElementById("form-btn");
//   publishButton.addEventListener("click", publish);

//   function publish() {
//     if (
//       firstName.value !== "" &&
//       lastName.value !== "" &&
//       age.value !== "" &&
//       storyTitle.value !== "" &&
//       genre.value !== "" &&
//       story.value !== ""
//     ) {

//       let li = document.createElement("li");
//       li.className = "story-info";

//       let article = document.createElement("article");

//       let hFour = document.createElement("h4");
//       hFour.textContent = `Name: ${firstName.value} ${lastName.value}`;
//       let pAge = document.createElement("p");
//       pAge.textContent = `Age: ${age.value}`;
//       let pTitle = document.createElement("p");
//       pTitle.textContent = `Title: ${storyTitle.value}`;
//       let pGenre = document.createElement("p");
//       pGenre.textContent = `Genre: ${genre.value}`;
//       let pText = document.createElement("p");
//       pText.textContent = `${story.value}`;

//       article.appendChild(hFour);
//       article.appendChild(pAge);
//       article.appendChild(pTitle);
//       article.appendChild(pGenre);
//       article.appendChild(pText);
//       li.appendChild(article);

//       let saveBtn = document.createElement("button");
//       saveBtn.className = "save-btn";
//       saveBtn.textContent = "Save Story";
//       li.appendChild(saveBtn);
//       let editBtn = document.createElement("button");
//       editBtn.className = "edit-btn";
//       editBtn.textContent = "Edit Story";
//       li.appendChild(editBtn);
//       let deleteBtn = document.createElement("button");
//       deleteBtn.className = "delete-btn";
//       deleteBtn.textContent = "Delete Story";
//       li.appendChild(deleteBtn);

//       parent.appendChild(li);

//       let firstNamePlaceholder = firstName.value;
//       let lastNamePlaceholder = lastName.value;
//       let agePlaceholder = age.value;
//       let storyTitlePlaceholder = storyTitle.value;
//       let genrePlaceholder = genre.value;
//       let storyPlaceholder = story.value;

//       firstName.value = "";
//       lastName.value = "";
//       age.value = "";
//       storyTitle.value = "";
//       genre.value = "";
//       story.value = "";
//       publishButton.disabled = true;

//       editBtn.addEventListener("click", editStory);

//       function editStory(ev) {
//         // ev.preventDefault();

//         editBtn.disabled = true;
//         saveBtn.disabled = true;
//         deleteBtn.disabled = true;

//         firstName.value = firstNamePlaceholder;
//         lastName.value = lastNamePlaceholder;
//         age.value = agePlaceholder;
//         storyTitle.value = storyTitlePlaceholder;
//         genre.value = genrePlaceholder;
//         story.value = storyPlaceholder;

//         publishButton.disabled = false;

//         parent.removeChild(li);
//       };

//       saveBtn.addEventListener('click', saveStory);

//       function saveStory(ev) {
//         //ev.preventDefault();
//         let main = document.getElementById('main');
//         main.innerHTML = '';
//         let h1 = document.createElement('h1');
//         h1.textContent = "Your scary story is saved!"
//         main.appendChild(h1);
//       };

//       deleteBtn.addEventListener('click', deleteStory);

//       function deleteStory(ev) {
//         //ev.preventDefault();
//         let child = document.getElementsByClassName('story-info')[0];
//         child.remove();
//         publishButton.disabled = false;
//       }
//     }
//   };
// };
