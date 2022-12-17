function attachEventsListeners() {
    let btns = Array.from(document.querySelectorAll('[type="button"]'));

    btns.forEach(x => x.addEventListener('click', onClick));

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function onClick(event) {
        let inputTarget = event.target.parentElement.querySelector('[type="text"]');
      //  console.log(inputTarget);
        if (inputTarget === days) {
            hours.value = obj['hours'] * Number(inputTarget.value);
            minutes.value = obj['minutes'] * Number(inputTarget.value);
            seconds.value = obj['seconds'] * Number(inputTarget.value);

        } else if (inputTarget === hours) {
            days.value =  Number(inputTarget.value) / obj['hours'];
            minutes.value = Number(inputTarget.value) * 60;
            seconds.value = Number(inputTarget.value) * 3600;

        } else if (inputTarget === minutes) {
            days.value =  Number(inputTarget.value) / obj['minutes'];
            hours.value = Number(inputTarget.value) / 60;
            seconds.value = Number(inputTarget.value) * 60;


        } else if (inputTarget === seconds) {
            days.value =  Number(inputTarget.value) / obj['seconds'];
            hours.value = Number(inputTarget.value) / 3600;
            minutes.value = Number(inputTarget.value) / 60;



        }


    }
}
