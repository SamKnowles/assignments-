

// var result = 'x ';
// for (var i = 0; i < 11; i ++) {
//     for (var j = 0; j < 11; j ++) {
//         if( i === 0 && j > 0) {
//             result += '[' + j + ']';
//         }
//         else if( j === 0 &&  j > 0) {
//             result += '[' + i + ']';
//         }
//         else if(i > 0 && j > 0) {
//             result += ( i * j) + ' ';
//         }
//     }
//     result += '\n'
// }
// console.log(result);

let multTable = () => {
    let output = [];

    for (let i = 1; i < 1; i++) {
        let row = [];
        for (let j = 1; j < 11; j++) {
            row.push(j * i)
        }
        output.push(row);
    }
    return output;
}

console.log(multTable());