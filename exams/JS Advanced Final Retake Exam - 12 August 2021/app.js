window.addEventListener('load', solve);

function solve() {
    // model, year, description, price
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    // console.log(typeof price)
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);
    let arr = [model, year, description, price];
    let table = document.getElementById('furniture-list');
    function onAdd(event) {
        event.preventDefault();
        //input validation
        if (model.value.length > 0 && description.value.length > 0 && Number(year.value) > 0 && Number(price.value) > 0) {
            table.innerHTML += `
            <tr class="info">
        
                <td>${model.value}</td>
                <td>${(Number(price.value)).toFixed(2)}</td>
                <td><button class="moreBtn">More Info</button>
                <button class="buyBtn">Buy it</button>
                </td>
            </tr>
            <tr class="hide">
               <td>Year: ${year.value}</td> 
               <td colspan="3">Description: ${description.value}</td> 
            </tr>
        `
            arr.forEach(x => x.value = '');

            let btnMore = Array.from(document.getElementsByClassName('moreBtn'))
            btnMore.forEach(x => x.addEventListener('click', onMore))

            let btnBuy = Array.from(document.getElementsByClassName('buyBtn'))
            btnBuy.forEach(x => x.addEventListener('click', onBuy))

        }
    }



    function onMore(event) {
        let classHide = event.target.parentElement.parentElement.nextElementSibling;
        if (event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info';
            classHide.style.display = 'contents'
        } else {
            event.target.textContent = 'More Info';
            classHide.style.display = 'none'

        }
       // console.log();



    }

    function onBuy(event) {
        let total = document.getElementsByClassName('total-price')[0];

        let totalPrice = Number(total.textContent);
        totalPrice += Number(event.target.parentElement.parentElement.children[1].textContent)
        total.textContent = totalPrice.toFixed(2);
     //   console.log(event.target.parentElement.parentElement.children[1]);
        event.target.parentElement.parentElement.nextElementSibling.remove();
        event.target.parentElement.parentElement.remove();

    }
}
