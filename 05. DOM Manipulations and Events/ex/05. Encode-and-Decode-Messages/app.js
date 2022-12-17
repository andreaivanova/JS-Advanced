function encodeAndDecodeMessages() {
    let inputArea = document.getElementsByTagName('textarea')[0];
     let outputArea = document.getElementsByTagName('textarea')[1];
    let output = '';
    let finalOutput ='';
    let btnEncode = document.getElementsByTagName('button')[0];
    let btnDecode = document.getElementsByTagName('button')[1];

    btnEncode.addEventListener('click', encode);
    btnDecode.addEventListener('click', decode);


    function encode(event) {
        for (const element of inputArea.value.split('')) {
            let code = element.charCodeAt(0) + 1;
            let newLetter = String.fromCharCode(code);
            output += newLetter;

        }
        inputArea.value = '';
        outputArea.value = output;
        output ='';
    }

    function decode(event) {
        for (const element of outputArea.value.split('')) {
            let code = element.charCodeAt(0) - 1;
            let newLetter = String.fromCharCode(code);
            finalOutput += newLetter;

        }
        outputArea.value = finalOutput;
        finalOutput = '';
    }

}

//The password for my bank account is 123pass321