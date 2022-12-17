function solve() {
   const btns = Array.from(document.querySelectorAll('.add-product'))

   btns.forEach(x => x.addEventListener('click', onClick));
   let text = document.querySelector('textarea');
   let sum = 0;
   const btnCheckOut = document.querySelector('button.checkout');
   btnCheckOut.addEventListener('click', onClickCheckOut)
   const list = [];



   function onClick(event) {

      const name = event.target.parentElement.parentElement.querySelector('.product-title').textContent;
      const price = Number(event.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

      sum += price;
      if (!list.includes(name)) {

         list.push(name);
      }
      const output = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      text.value += output;

   }
   function onClickCheckOut() {
      text.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`
      btns.forEach(x => x.removeEventListener('click', onClick));
      btnCheckOut.removeEventListener('click', onClickCheckOut)
   }

}

