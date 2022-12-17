function requestValidator(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let regexURI = /(^[\w.]+$)/gm //it can either match the regex or be an *, it cannot be an empty string

   // let regexMessage = /^[^<>\\&'"]+$/;
    let regexMessage = /[<>\\&'"]/gm;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
   // console.log(obj.message);
    if (!methods.includes(obj.method) || obj.method === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }


    if (!regexURI.test(obj.uri) || obj.uri === undefined) {
    

            throw new Error('Invalid request header: Invalid URI');
        
    }

    if (!versions.includes(obj.version) || obj.version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (regexMessage.test(obj.message) || obj.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

//    if (obj.message === undefined){
//     throw new Error('Invalid request header: Invalid Message');
//    }
return obj;

}
requestValidator({
   method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
);

console.log('------');
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}
);
console.log('------');

requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}
);
