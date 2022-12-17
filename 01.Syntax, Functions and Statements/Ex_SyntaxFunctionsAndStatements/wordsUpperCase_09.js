function wordsUpperCase(str) {
    const regex = /\w+/g;
    const arr = [];
    for (const match of  str.matchAll(regex)) {
       arr.push(match[0].toUpperCase());
    }

console.log(arr.join(', '));
}
wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');