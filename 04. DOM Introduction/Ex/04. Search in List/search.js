function search() {
   let towns = Array.from(document.getElementById('towns').children);

   let input = document.getElementById('searchText').value;
   let count = 0;
   // console.log(input);
   for (const iterator of towns) {
      if (input === iterator.textContent || iterator.textContent.includes(input)) {

         iterator.style.textDecoration = 'underline';
         iterator.style.fontWeight = 'bold';
         count++;
      }

   }

   document.getElementById('result').textContent = `${count} matches found`;
}


// document.getElementById("demo").style.textDecoration = "underline";  document.getElementById("demo").style.fontWeight = "bold";

// making a text bold and underlined in dom:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_textdecoration
