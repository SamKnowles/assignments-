var doneo = function(n) {
    var arr = []
    for (var i = 1; i <= n; i++) {
        arr.push(i);
        if (i % 15 === 0) {
            arr[i] = "FIZZ BUZZ";
        }
        else if (i % 3 === 0) {
            arr[i] = "fizz";
        }
        else if (i % 5 === 0) {
            arr[i] = "buzz";
        }
    }
    return arr;
};
console.log(doneo(15));
