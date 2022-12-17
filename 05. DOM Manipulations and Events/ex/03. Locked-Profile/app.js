function lockedProfile() {
    let btns = Array.from(document.getElementsByTagName('button'));
    btns.forEach(x => x.addEventListener('click', onClick));



    function onClick(event) {
        let hiddenInfo = event.target.parentElement.getElementsByTagName('div')[0];
        

        if (event.target.parentElement.querySelector('input[type="radio"]:checked').value === 'unlock') {

            // if (hiddenInfo.style.display === 'none') {
            //     hiddenInfo.style.display = 'inline-block';
            //     event.target.textContent = 'Hide it';
            // } else {

            //     hiddenInfo.style.display = 'none';
            //     event.target.textContent = 'Show more';
            // }

            if (event.target.textContent === 'Show more') {
                hiddenInfo.style.display = 'inline-block';
              event.target.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
             event.target.textContent = 'Show more';
            }
        }


        
    }
    
}

//console.log(event.target.parentElement.querySelector('input[type="radio"]:checked'));





// let btn = document.getElementsByTagName('button');
// btn[0].addEventListener('click', onClick);

// function onClick(event) {
    
    //     if (document.querySelector('input[value="unlock"]').checked) {
        //         console.log(true);
        //     }
        
        // }
        // checks if the unlock option is ticked:
        // event.target.parentElement.querySelector('[value="unlock"]').checked
        
        //checks if the lock option is ticked:
        // event.target.parentElement.querySelector('[value="lock"]').checked
        
        
        
        //---------------------