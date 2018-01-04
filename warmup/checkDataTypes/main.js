// console.log(typeof "this is a string"); //returns 'string'

// //try .every array method
// console.log([1, 2, 3].every((num) => {
//     return num > 10;
// })) // returns false


// function checkTypes(arr) {  
//     // Code here
// }

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  
checkTypes(multiD1)  
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]  
checkTypes(multiD1)  
// returns true (each inner array contains the same data type as the others)


function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof(value) === typeof(initial)
        )
    )
}

console.log(checkTypes(multiD2))

