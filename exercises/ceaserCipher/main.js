var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = Number(readline.question('How many letters would you like to shift? '));

function cipher(str, shift) {
    var shift = shift % 26; 
    return myReduce(str.split(''),(soFar, current) => {
        return soFar + (String.fromCharCode((current.charCodeAt(0)+shift)))
    }, '');
}

console.log(cipher(input, shift));

function myReduce(arr, fn, initial) {
    let result = initial;
    for(let i=0; i<arr.length; i++) {
        result = fn(result, arr[i], i);
    }
    return result;
}  

