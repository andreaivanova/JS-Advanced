function validate() {
    const regex = /[a-z]+\@[a-z]+\.[a-z]+/;
    const email = document.getElementById('email');
    
    email.addEventListener('change', onChange);
    
    function onChange(event){
        
          if (event.target.value.match(regex)){
            event.target.removeAttribute('class');
            return;
          } 

          email.className = 'error';

    }


}