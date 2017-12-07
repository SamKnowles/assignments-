
addbutt.onclick = function(){
    var numOne = document.getElementById("addnum1").value;
    var numTwo = document.getElementById("addnum2").value;
    numOne = +numOne;
    numTwo = +numTwo;
    var sum = numOne + numTwo;
    document.getElementById("addtot").innerHTML = sum;
};

subbutt.onclick = function(){
    var numOne = document.getElementById("subnum1").value;
    var numTwo = document.getElementById("subnum2").value;
    numOne = +numOne;
    numTwo = +numTwo;
    var difference = numOne - numTwo;
    document.getElementById("subtot").innerHTML = difference;
};

multbutt.onclick = function(){
    var numOne = document.getElementById("multnum1").value;
    var numTwo = document.getElementById("multnum2").value;
    numOne = +numOne;
    numTwo = +numTwo;
    var product = numOne * numTwo;
    document.getElementById("multtot").innerHTML = product;
};