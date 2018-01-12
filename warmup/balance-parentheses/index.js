function text(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            counter++;
        }
        else if (str[i] === ')') {
            counter--;
            if (counter < 0) {
                return false;
            }
        }
    }
    return counter === 0;
}

console.log(text('())()()()'));

// function parens(str) {
//     let balance;
//     let count = 0;
//     let parensArr = [];
//     for(let i =0; i < str.length; i++) {
//         if(str[i] === "(") {
//             count++;
//         } else if (str[i] === ")") {
//             count--;
//             if (count < 0) {
//                 return false;
//             }
//         }
//     }
//     return count === 0;
// }