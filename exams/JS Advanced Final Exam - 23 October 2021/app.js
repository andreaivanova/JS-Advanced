window.addEventListener('load', solve);

function solve() {
    //genre,name , author, date
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let btnAdd = document.getElementById("add-btn");
    btnAdd.addEventListener('click', onAdd);
    let arr = [genre, name, author, date];
    let allHitsSection = document.getElementById('all-hits').querySelector('.all-hits-container');
    let totalLikes = document.querySelector('section .likes').children[0];
    let savedSongs = document.getElementById('saved-hits').querySelector('.saved-container');

    function onAdd(event) {
        event.preventDefault();
        if (genre.value.length > 0 && name.value.length > 0 && author.value.length > 0 && date.value.length > 0) {
            allHitsSection.innerHTML += `
            <div class="hits-info">
            <img src="./static/img/img.png">
            <h2>Genre: ${genre.value}</h2>
            <h2>Name: ${name.value}</h2>
            <h2>Author: ${author.value}</h2>
            <h3>Date: ${date.value}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>
            
        </div>`


            arr.forEach(x => x.value = '');

            let btnLike = Array.from(document.getElementsByClassName('like-btn'));
            let btnSave = Array.from(document.getElementsByClassName('save-btn'));
            let btnDelete = Array.from(document.getElementsByClassName('delete-btn'));
            // console.log(totalLikes);

            btnLike.forEach(x => x.addEventListener('click', onLike));
            btnSave.forEach(x => x.addEventListener('click', onSave));
            btnDelete.forEach(x => x.addEventListener('click', onDelete));
        }

    }

    function onLike(event) {
        let text = totalLikes.textContent;
        let [str, num] = text.split(': ');
        num = Number(num);
        num++;
        totalLikes.textContent = str + ': ' + num;

        event.target.setAttribute('disabled', '');



    }


    function onSave(event) {
        let div = event.target.parentElement;
        div.remove();
        savedSongs.appendChild(div);
        event.target.parentElement.querySelector('.like-btn').remove();
        event.target.parentElement.querySelector('.save-btn').remove();
        
    }


    function onDelete(event) {
        event.target.parentElement.remove();
    }
}