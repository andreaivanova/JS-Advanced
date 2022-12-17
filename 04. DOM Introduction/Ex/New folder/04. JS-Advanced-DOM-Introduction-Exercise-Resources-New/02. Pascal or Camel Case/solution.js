function solve() {
    let text = document.querySelectorAll('div input')[0].value;
    const convention = document.querySelectorAll('div input')[1].value;
    if (convention === 'Camel Case') {
        text = camel(text);
        document.getElementById('result').textContent = text;
    } else if (convention === 'Pascal Case') {
        text = pascal(text);
        document.getElementById('result').textContent = text;
    } else {
        document.getElementById('result').textContent = 'Error!';
    }
    function camel(str) {
        str = str.toLowerCase();
        return str.split(' ').reduce((x, y) => x + (y.charAt(0).toUpperCase() + y.slice(1)))
    }

     function pascal(str){
      
            return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
                return chr.toUpperCase()});
        
     }
}