function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const allMatches = document.querySelectorAll('.select')
      for (const iterator of allMatches) {
      
         iterator.classList.remove('select')
      }

      let input = document.getElementById('searchField').value;
      if (input !== '') {
         const rows = Array.from(document.querySelectorAll('tbody tr'));

         for (const row of rows) {
            const arr = Array.from(row.children).map(x => x.textContent);


            for (const cell of arr) {
               if (cell === input || cell.includes(input)) {
                  console.log('there is a match');
                  row.classList.add('select');
                  break;
               }


            }
         }

      }
      document.getElementById('searchField').value = '';

   }
}