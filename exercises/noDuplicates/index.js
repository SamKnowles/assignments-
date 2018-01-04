var removeDups = function(str) {
    var outputs = {
        noDups: "",
        dups: ""
    }
    
    for (var i = 0; i < str.length; i++) {
        if (!outputs.noDups.includes(str[i])) {   
            outputs.noDups += str[i];
        }
        else {
            outputs.dups += str[i];
        }     
    }
    return outputs;
}

console.log(removeDups("aaaaabbbbbccccdefggggg"));