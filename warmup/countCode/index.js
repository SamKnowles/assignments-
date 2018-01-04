// function countCode(str) {
//     str = str.toLowerCase();
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === 'c') {
//             if(/(co([a-z])e)/.test(str.slice(i, i+4))) {
//                 count++;
//                 i += 3;
//             }
//         }
//     }
//     return count;
//  }

//  function countCode(str) {
//     var count = (str.match(/co.*?e/g)).length;
//     console.log(count);
//  }

//  console.log(countCode('codebillscotecogebilseasadsgcoze'));

// function add(x, y) {
//     if(typeof x != "number" || typeof y != "number"){
//         throw "Input must be a number"
//     }
//     return x + y;
// }

// console.log(add(2, "5"));

// try {
//     console.log(add(2, "3"));
// }
// catch(err){
//     console.log(err);
// }

// console.log(add(2,4));

// function InputError() {
//     Error.call
//     this.type = "Input Error";
//     this.message = "Input must be a number";
// }

// function add(x, y) {
//     if(typeof x != "number" || typeof y != "number") {
//         throw new InputError();
//     }
//     return x + y;
// }

// try{
//     console.log(add(2, "5"))
// }
// catch(err){
//     console.log(err.message);
// }
// finally{
//     console.log("Im going to run.  I dont give AF");
// }

// <-------------------------------UNIT TESTING---------------------------->

function multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number"){
        throw "invalid input";
    }
    return x * y;
    
}

module.exports = multiply;