window.onload = displayCount;


let count = document.getElementById("count");
let btn = document.getElementById("btn");

let counter = JSON.parse(localStorage.getItem("count")) || 0;

function displayCount(event) {
    localStorage.setItem("count", JSON.stringify(counter));    
    count.innerHTML = counter;
    counter++;    
}


btn.onclick = displayCount;