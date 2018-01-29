// Given an array of strings, find the 3 adjacent elements
// with the longest combined length. Return them in the form of an array.

function longest(arr) {
    let long = arr[0] + ',' + arr[1] + ',' + arr[2];
    for (var i = 0; i < arr.length - 2; i++) {
        let newLong = arr[i] + ',' + arr[i + 1] + ',' + arr[i + 2];
        if (long.length < newLong.length) {
            long = newLong;
        }

    }
    return long.split(',');
}

const inputArray = ["this", "is", "an", "array"];

console.log(longest(inputArray));

// 