tests = [
{
arr: [1, 2, 3],
callback: (num) => typeof num === "number"
},{
arr: [1, 2, "2"],
callback: (num) => typeof num === "number"
},{
arr: [1, "2", "3"],
callback: (num) => typeof num === "number"
},{
arr: ["1", "2", "3"],
callback: (num) => typeof num === "number"
}
]

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

console.log(some(tests[2].arr, tests[2].callback));
