var box = document.getElementById("box");
box.onmouseover = function(){
    box.style.backgroundColor = "blue";
};

box.onmousedown = function(){
    box.style.backgroundColor = "red";
};

box.onmouseup = function(){
    box.style.backgroundColor = "yellow";
};

box.ondblclick = function(){
    box.style.backgroundColor = "green";
};

window.onscroll = function(){
    box.style.backgroundColor = "orange";
};

window.onkeypress = function(e) {
    if (e.keyCode === 98) {
        box.style.backgroundColor = "blue";
    }
    else if (e.keyCode === 103) {
        box.style.backgroundColor = "green";
    }
    else if (e.keyCode === 114) {
        box.style.backgroundColor = "red";
    }
    else if (e.keyCode === 121) {
        box.style.backgroundColor = "yellow";
    }
    else if (e.keyCode === 111) {
        box.style.backgroundColor = "orange";
    }
};

