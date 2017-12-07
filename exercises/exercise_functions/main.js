// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(1,2));

// function large(x, y, z) {
//     return Math.max(x, y, z);
// }

// console.log(large(11, 22, 33));

// function evenOdd(number) {
//     if (number % 2 === 0) {
//         return 'even';
//     }
//     else {
//         return 'odd';
//     }
// }
// console.log(evenOdd(11));

// function longString(longEnough) {
//     if (longEnough.length <= 20) {
//         return longEnough + longEnough;
//     }
//     else {
//         var half = longEnough.length / 2;
//         return longEnough.slice(0, half);
//     }
// }
// console.log(longString("apoiudaposifupoaisud"));

// function add(n) {
//     var fib = [];
//     fib[0] = 0;
//     fib[1] = 1;
//     for (var i = 2; i <= n; i++) {
//         fib.push[i];
//         console.log(fib);
        // for (var i in fib) { 
        //     total += fib[i]; 
        //     console.log(fib);
        // }
    // }
    // return total; 
//     }   
// }
// console.log(add(9));


// function solve(a, b, c) {
//     var pos = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     var neg = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     return pos + " and " + neg;
// }
// console.log(solve(5, 1, -1));



var getMax = function (str) {
    var max = 0,
    maxChar = '';
    str.split('').forEach(function(char) {
        if(str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
  return maxChar;
};
console.log(getMax("ajbdaajbbjbdljddjsskjjjll"));