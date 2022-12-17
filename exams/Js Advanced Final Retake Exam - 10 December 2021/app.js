
window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let arr = [description, clientName, clientPhone];
    let completedOrders = document.getElementById('completed-orders');
    let btnClear = document.querySelector('button.clear-btn')
    btnClear.addEventListener('click', onClear);

    function onClear(event) {

        // console.log(event.target);
        let items = Array.from(event.target.parentElement.getElementsByClassName('container'));
        items.forEach(x => x.remove());
    }


    let btnSubmit = document.querySelector('button[type="submit"]');
    // console.log(btnSubmit);
    btnSubmit.addEventListener('click', onSubmit);

    let receivedOrders = document.getElementById('received-orders');


    function onSubmit(event) {
        event.preventDefault();

        if (description.value.length > 0 && clientName.value.length > 0 && clientPhone.value.length > 0) {
            receivedOrders.innerHTML += `<div class="container">
            <h2>Product type for repair: ${productType.value}</h2>
            <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
            <h4>Description of the problem: ${description.value}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>
    
        </div>`

            arr.forEach(x => x.value = '');
            productType.value = 'Computer'
            let btnStart = Array.from(document.getElementsByClassName('start-btn'));

            let btnFinish = Array.from(document.getElementsByClassName('finish-btn'));


            btnStart.forEach(x => x.addEventListener('click', onStart));
            btnFinish.forEach(x => x.addEventListener('click', onFinish));
        }
    }
    /*
    To set the disabled attribute, select the element and call the setAttribute() method on it, passing it disabled as the first parameter, e.g. button. setAttribute('disabled', '') .
    */
    function onStart(event) {
        event.target.setAttribute('disabled', '');
        event.target.parentElement.querySelector('button.finish-btn').removeAttribute('disabled');
    }

    function onFinish(event) {
        // console.log(event.target);
        // completedOrders.innerHTML += `
        // <div class="container">
        //     <h2>Product type for repair: ${productType.value}</h2>
        //     <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
        //     <h4>Description of the problem: ${description.value}</h4>
        // `
        let divClass = event.target.parentElement;
        let btnStart = event.target.parentElement.querySelector('button.start-btn');
        let btnFinish = event.target.parentElement.querySelector('button.finish-btn');
        divClass.remove();
        divClass.removeChild(btnStart);
        divClass.removeChild(btnFinish);
        completedOrders.appendChild(divClass);





    }

}