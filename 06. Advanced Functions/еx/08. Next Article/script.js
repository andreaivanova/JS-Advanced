function getArticleGenerator(articles) {
    
    let div  = document.getElementById('content');
    
    return function innerFunction(){
        if (articles.length === 0){
            return;
        }
        let newEl = document.createElement('article');
        newEl.textContent =articles.shift(); 
        div.appendChild(newEl);
        // return document.getElementById('content').textContent += articles.shift() + '\n';
    }
}
