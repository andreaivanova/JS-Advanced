function toggle() {
    let el = document.getElementById('extra');
    let btn = document.getElementsByClassName("button")[0];
    if (el.style.display === 'block') {
        el.style.display = 'none';
        btn.textContent = 'More'
    } else {

        el.style.display = 'block';
        btn.textContent = 'Less';
    }



}