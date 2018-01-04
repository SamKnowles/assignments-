// function isPalindrome(str){
//     str = str.toLowerCase().replace(/[^a-z]+/g,'');
//     if (reverseWords(str) === str) {
//       return true;
//     }
//     else {
//       return false;
//     }
// }

// function reverseWords(str){
//   var backWords = (str.split('').reverse().join(''));
//   return backWords;
// }

let isPalindrome = word => {    
    var l = word.length;
    word = word.replace(/[^A-z]/g,"");
    for (var i = 0; i < l / 2; i++) {
        let first = word[i].toLowerCase();
        let last = word[word.length -1 -i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}


module.exports = isPalindrome;
