function create(arr) {
   let parentElement = document.getElementById('content');
   for (const element of arr) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = element;
      div.appendChild(p);
      parentElement.appendChild(div);

   }

   let allDivs = Array.from(document.querySelectorAll('div div'));
   allDivs.forEach(x => x.addEventListener('click', onClick));
   
   
   function onClick(event) {
      //console.log(allDivs);
      event.target.children[0].style.display = 'inline';
   }
}